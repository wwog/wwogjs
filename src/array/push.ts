/**
 * The same operation as array under shallow copy returns the shallow copy array.
 * @since 0.0.1
 */
export const push = <T>(array: T[], ...items: T[]): T[] => {
  const arr = [...array]
  arr.push(...items)
  return arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`push()`, () => {
    expect(push([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
    const arr = [1, 2, 3]
    expect(push(arr, 4) === arr).toEqual(false)
  })
}
