import { structuredCloneSafe } from '@/utils/clone'
import { NotChangeOriginMethodConfig } from './types'

export type UnshiftConfig = NotChangeOriginMethodConfig
/**
 * Copies the original array and returns the result after the copied array inserts the header member
 * @description not change the original array
 */
export const unshift = <T>(array: T[], config: UnshiftConfig, ...items: T[]): T[] => {
  const { deepClone = false, deepCloneMethod = structuredCloneSafe } = config || {}
  const arr = [...array]
  arr.unshift(...items)
  return deepClone ? deepCloneMethod(arr) : arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`shift()`, () => {
    expect(unshift([1, 2, 3], {}, 5)).toEqual([5, 1, 2, 3])
    const arr = [1, 2, 3]
    expect(unshift(arr, {}, 5) === arr).toEqual(false)
  })
}
