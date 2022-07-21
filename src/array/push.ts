import { structuredCloneSafe } from '@/utils/clone'
import { NotChangeOriginMethodConfig } from './types'

export type pushConfig = NotChangeOriginMethodConfig
/**
 * Return the new array after push
 * @description not change the original array
 */
export const push = <T>(array: T[], config: pushConfig, ...items: T[]): T[] => {
  const { deepClone = false, deepCloneMethod = structuredCloneSafe } = config || {}
  const arr = [...array]
  arr.push(...items)
  return deepClone ? deepCloneMethod(arr) : arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`push()`, () => {
    expect(push([1, 2, 3], { deepClone: false }, 4)).toEqual([1, 2, 3, 4])
    const arr = [1, 2, 3]
    expect(push(arr, { deepClone: false }, 4) === arr).toEqual(false)
  })
}
