/**
 * Returns a two-dimensional array after blocking
 * @since 0.0.1
 */
export const chunk = (array: any[], size: number): any[][] => {
  const result: any[][] = []
  let index = 0
  while (index < array.length) {
    result.push(array.slice(index, index + size))
    index += size
  }
  return result
}
