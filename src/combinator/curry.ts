export const curry = (fn: Function) => {
  return (...args: any[]) => {
    if (fn.length > 1 && args.length < fn.length) {
      return curry(fn.bind(null, ...args))
    }
    return fn(...args)
  }
}
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('curry inline test', () => {
    const add = (a: number, b: number, c: string) => a + b + c
    const add2 = curry(add)
    expect(add2(1, 2, '3')).toEqual('33')
    const add3 = curry(add)
    expect(add3(1)(2)('3')).toEqual('33')
  })
}
