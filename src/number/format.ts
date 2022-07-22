import { NumberFixedConfig, toFixed } from './toFixed'

export type NumberFormatConfig = NumberFixedConfig
/**
 * @since 0.0.1
 * @example
 * format(12.0000, { precision: 2 })// result 12 not 12.00
 * format(12.126, { precision: 2, round: false })// 12.12
 * format(0.00)//0
 */
export const format = (num: number, config?: NumberFormatConfig) => Number(toFixed(num, config))

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('format()', () => {
    expect(format(12.456, { precision: 2, round: false })).eq(12.45)
    expect(format(12.456)).eq(12.46)
    expect(format(0.0)).eq(0)
  })
}
