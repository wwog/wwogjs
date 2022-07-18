/**
 * @description The parameter of the return function is qualified with the parameter of the last function
 * @description The return value type of the return function is the return value type of the first function
 * @example
 * const toUpper = (str: string) => str.toUpperCase()
 * const exclaim = (str: string) => `${str} fp!`
 * compose(exclaim, toUpper)('hello') // 'HELLO fp!'
 */
export const compose = <T extends Function[], P = ComposeParam<T>, R = ComposeResult<T>>(...fns: T) => {
  //@ts-expect-error P is array,but fail to identify
  return (...args: P): R => {
    //@ts-expect-error I don't know how to solve
    return fns.reduceRight((res, fn) => [fn(...res)], args)[0]
  }
}
/**
 *  parameter of the last function
 */
export type ComposeParam<T extends Function[]> = T extends [...any, infer L]
  ? L extends (...args: infer P) => any
    ? P extends any[]
      ? P
      : never
    : never
  : never
/**
 *  return value of the first function
 */
export type ComposeResult<T extends Function[]> = T extends [infer F, ...any]
  ? F extends (...args: any) => infer R
    ? R
    : never
  : never

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  const toUpper = (str: string) => str.toUpperCase()
  const exclaim = (str: string) => `${str} fp!`
  const t = compose(exclaim, toUpper)
  it('compose inline test', () => {
    expect(t('hello')).toEqual('HELLO fp!')
  })
}
