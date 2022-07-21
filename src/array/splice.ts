import { structuredCloneSafe } from '@/utils/clone'
import { NotChangeOriginMethodConfig } from './types'

export type SpliceConfig = NotChangeOriginMethodConfig
/**
 * Copy the original array and return the result of the new array after splice
 * @param deleteCount default 0
 * @since 0.0.1
 */
export const splice = <T>(
  array: T[],
  start: number,
  deleteCount?: number,
  config?: SpliceConfig,
  ...items: T[]
): T[] => {
  const { deepClone = false, deepCloneMethod = structuredCloneSafe } = config || {}
  const arr = [...array]
  arr.splice(start, deleteCount ?? 0, ...items)
  return deepClone ? deepCloneMethod(arr) : arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`splice()`, () => {
    expect(splice([1, 2, 3], 1)).toEqual([1, 2, 3])
    const arr = [1, 2, 3, 4, 5]
    expect(splice(arr, 1, 2) === arr).toEqual(false)
    const obj = { number: 1 }
    const arr2 = [obj, obj, obj, obj]
    const arr2Splice = splice(arr2, 1, 1, { deepClone: true })
    obj.number = 3
    expect(arr2[0] === obj).toEqual(true)
    expect(arr2Splice[0] === obj).toEqual(false)
  })
}
