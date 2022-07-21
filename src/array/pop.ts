import { structuredCloneSafe } from '@/utils/clone'
import { NotChangeOriginMethodConfig } from './types'

export type PopConfig = NotChangeOriginMethodConfig
/**
 * Returns the new array with the last element removed
 * @description not change the original array
 * @since 0.0.1
 */
export const pop = <T>(array: T[], config?: PopConfig): T[] => {
  const { deepClone = false, deepCloneMethod = structuredCloneSafe } = config || {}
  const arr = [...array]
  arr.pop()
  return deepClone ? deepCloneMethod(arr) : arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`pop()`, () => {
    expect(pop([1, 2, 3])).toEqual([1, 2])
    const arr = [1, 2, 3]
    expect(pop(arr) === arr).toEqual(false)
  })
}
