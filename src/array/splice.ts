/**
 * The same operation as array under shallow copy returns the shallow copy array.
 * @param deleteCount default 0
 * @since 0.0.1
 */
export const splice = <T>(array: T[], start: number, deleteCount?: number, ...items: T[]): T[] => {
  const arr = [...array]
  arr.splice(start, deleteCount ?? 0, ...items)
  return arr
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it(`splice()`, () => {
    expect(splice([1, 2, 3], 1)).toEqual([1, 2, 3])
    const arr = [1, 2, 3, 4, 5]
    expect(splice(arr, 1, 2) === arr).toEqual(false)
  })
}
