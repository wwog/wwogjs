/**
 * Returns a two-dimensional array after blocking
 * @since 0.0.1
 * @param {Array} array
 * @param {number} size the size of each block,default:1
 */
export const chunk = (array: any[], size = 1): any[][] => {
  const result: any[][] = []
  if (size < 1 || array.length === 0) return []
  let index = 0
  while (index < array.length) {
    result.push(array.slice(index, index + size))
    index += size
  }
  return result
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest

  it('should chunk an array', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).toEqual([])
    expect(chunk([], 1)).toEqual([])
  })
}
