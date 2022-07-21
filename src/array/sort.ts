/**
 * The same operation as array under shallow copy returns the shallow copy array.
 * @since 0.0.1
 */
export const sort = <T>(array: T[], compareFn?: (a: T, b: T) => number): T[] => {
  const arr = [...array]
  arr.sort(compareFn)
  return arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`sort()`, () => {
    expect(sort([1, 2, 3])).toEqual([1, 2, 3])
    expect(sort([1, 2, 3], (a, b) => b - a)).toEqual([3, 2, 1])
  })
}
