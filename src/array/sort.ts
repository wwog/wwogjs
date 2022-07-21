import { structuredCloneSafe } from '@/utils/clone'
import { NotChangeOriginMethodConfig } from './types'

export type ReverseConfig = NotChangeOriginMethodConfig
/**
 * Returns the new sorted array
 * @description not change the original array
 * @since 0.0.1
 */
export const sort = <T>(array: T[], compareFn?: (a: T, b: T) => number, config?: ReverseConfig): T[] => {
  const { deepClone = false, deepCloneMethod = structuredCloneSafe } = config || {}
  const arr = [...array]
  arr.sort(compareFn)
  return deepClone ? deepCloneMethod(arr) : arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`sort()`, () => {
    expect(sort([1, 2, 3])).toEqual([1, 2, 3])
    expect(sort([1, 2, 3], (a, b) => b - a)).toEqual([3, 2, 1])
    expect(sort([1, 2, 3], (a, b) => b - a, { deepClone: true })).toEqual([3, 2, 1])
    const arr = [1, 2, 3]
    expect(sort(arr, (a, b) => a - b, { deepClone: false }) === arr).toEqual(false)
    const i1 = { number: 1 }
    const arr2 = [i1, { number: 2 }, { number: 3 }]
    const arr2Sort = sort(arr2, (a, b) => a.number - b.number, { deepClone: true })
    i1.number = 3
    expect(arr2[0] === i1).toEqual(true)
    expect(arr2Sort[0] === i1).toEqual(false)
  })
}
