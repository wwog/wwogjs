import { functionCherker } from './checkType'

/**
 * https://github.com/tc39/proposal-promise-try
 */
export function promiseTry<T>(fn: () => T | Promise<T>) {
  functionCherker(fn)
  return new Promise<T>((resolve, reject) => {
    try {
      resolve(fn())
    } catch (error) {
      reject(error)
    }
  })
}
