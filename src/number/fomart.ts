export type NumberFormartConfig = {
  round?: boolean
  /**
   * Decimal precision
   */
  precision?: number
}
/**
 * @example
 * format(123) // 123
 * format(123.00) // 123
 * format(123.456) // 123.46
 * format(0) // 0
 */
export const formart = () => {}
