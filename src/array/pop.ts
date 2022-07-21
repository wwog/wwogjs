/**
 * The same operation as array under shallow copy returns the shallow copy array.
 * @since 0.0.1
 */
export const pop = <T>(array: T[]): T[] => {
  const arr = [...array]
  arr.pop()
  return arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`pop()`, () => {
    expect(pop([1, 2, 3])).toEqual([1, 2])
    const arr = [1, 2, 3]
    expect(pop(arr) === arr).toEqual(false)
  })
}
