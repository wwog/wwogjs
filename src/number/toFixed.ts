export type NumberFixedConfig = {
  /**
   * @default true
   */
  round?: boolean
  /**
   * Decimal precision
   * @default 2
   */
  precision?: number
}
/**
 * Same as number.toFixed, there is an extra way to remove the rounding
 * @since 0.0.1
 */
export const toFixed = (num: number, config?: NumberFixedConfig) => {
  const { precision = 2, round = true } = config || {}
  let result: string
  if (typeof num !== 'number') {
    throw new Error('formart: num must be a number')
  }
  if (round) {
    result = num.toFixed(precision)
  } else {
    result = num.toString()
    const dotIdx = result.indexOf('.')
    if (dotIdx === -1) {
      result += '.' + '0'.repeat(precision)
    }
    const tempArr = result.split('.')
    result = tempArr[0] + '.' + tempArr[1].slice(0, precision)
  }
  return result
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('toFixed()', () => {
    expect(toFixed(12.456, { precision: 2, round: false })).eq('12.45')
    expect(toFixed(12.456)).eq('12.46')
    expect(toFixed(0, { round: false })).eq('0.00')
  })
}
