export const pipe = <T extends Function>(...fns: T[]) => {
  return (...args: any[]) => {
    return fns.reduce((res, fn) => [fn(...res)], args)[0]
  }
}
