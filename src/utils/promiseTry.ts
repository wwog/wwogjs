/**
 * https://github.com/tc39/proposal-promise-try
 * @since 0.0.1
 */
export function promiseTry<T>(fn: () => T | Promise<T>) {
  return new Promise<T>((resolve, reject) => {
    try {
      resolve(fn())
    } catch (error) {
      reject(error)
    }
  })
}
