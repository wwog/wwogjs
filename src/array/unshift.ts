/**
 * The same operation as array under shallow copy returns the shallow copy array.
 * @since 0.0.1
 */
export const unshift = <T>(array: T[], ...items: T[]): T[] => {
  const arr = [...array]
  arr.unshift(...items)
  return arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`shift()`, () => {
    expect(unshift([1, 2, 3], 5)).toEqual([5, 1, 2, 3])
    const arr = [1, 2, 3]
    expect(unshift(arr, 5) === arr).toEqual(false)
  })
}
