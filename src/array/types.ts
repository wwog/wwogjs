export interface NotChangeOriginMethodConfig {
  /**
   * @description If false, operate on a shallow clone array and return the array after the operation
   * @description If true, the result will be deeply cloned
   * @default false
   */
  deepClone?: boolean
  /**
   * @description Cloning methods used
   * @default utils/structuredClone
   */
  deepCloneMethod?: <T>(value: T) => T
}
