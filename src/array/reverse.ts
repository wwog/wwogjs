/**
 * The same operation as array under shallow copy returns the shallow copy array.
 * @since 0.0.1
 */
export const reverse = <T>(array: T[]): T[] => {
  const arr = [...array]
  arr.reverse()
  return arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`reverse()`, () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
    const arr = [1, 2, 3]
    expect(reverse(arr) === arr).toEqual(false)
  })
}
