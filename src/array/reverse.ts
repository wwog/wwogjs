import { structuredCloneSafe } from '@/utils/clone'
import { NotChangeOriginMethodConfig } from './types'

export type ReverseConfig = NotChangeOriginMethodConfig
/**
 * Returns the new inverted array
 * @description not change the original array
 * @since 0.0.1
 */
export const reverse = <T>(array: T[], config?: ReverseConfig): T[] => {
  const { deepClone = false, deepCloneMethod = structuredCloneSafe } = config || {}
  const arr = [...array]
  arr.reverse()
  return deepClone ? deepCloneMethod(arr) : arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`reverse()`, () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
    const arr = [1, 2, 3]
    expect(reverse(arr) === arr).toEqual(false)
  })
}
