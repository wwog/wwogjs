/**
 * @description The parameter of the return function is qualified with the parameter of the first function
 * @description The return value type of the return function is the return value type of the last function
 */
export const pipe = <T extends Function[], P = PipeParam<T>, R = PipeResult<T>>(...fns: T) => {
  //@ts-expect-error P is array,but fail to identify
  return (...args: P): R => {
    //@ts-expect-error I don't know how to solve
    return fns.reduce((res, fn) => [fn(...res)], args)[0]
  }
}

/**
 *  parameter of the first function
 */
export type PipeParam<T extends Function[]> = T extends [infer L, ...any]
  ? L extends (...args: infer P) => any
    ? P extends any[]
      ? P
      : never
    : never
  : never
/**
 *  return value of the last function
 */
export type PipeResult<T extends Function[]> = T extends [...any, infer F]
  ? F extends (...args: any) => infer R
    ? R
    : never
  : never

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  const toUpper = (str: string) => str.toUpperCase()
  const exclaim = (str: string) => `${str} fp!`
  const t = pipe(exclaim, toUpper)
  it('pipe inline test', () => {
    expect(t('hello')).toEqual('HELLO FP!')
  })
}
