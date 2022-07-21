/**
 * The same operation as array under shallow copy returns the shallow copy array.
 * @since 0.0.1
 */
export const shift = <T>(array: T[]): T[] => {
  const arr = [...array]
  arr.shift()
  return arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`shift()`, () => {
    expect(shift([1, 2, 3])).toEqual([2, 3])
    const arr = [1, 2, 3]
    expect(shift(arr) === arr).toEqual(false)
  })
}
