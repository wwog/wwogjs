import { structuredCloneSafe } from '@/utils/clone'
import { NotChangeOriginMethodConfig } from './types'

export type ShiftConfig = NotChangeOriginMethodConfig
/**
 * Copies the array and returns the result of removing the first member of the array
 * @description not change the original array
 */
export const shift = <T>(array: T[], config?: ShiftConfig): T[] => {
  const { deepClone = false, deepCloneMethod = structuredCloneSafe } = config || {}
  const arr = [...array]
  arr.shift()
  return deepClone ? deepCloneMethod(arr) : arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`shift()`, () => {
    expect(shift([1, 2, 3])).toEqual([2, 3])
    const arr = [1, 2, 3]
    expect(shift(arr) === arr).toEqual(false)
  })
}
