import { structuredClone as structuredClonePolyfill } from 'structured-clone-polyfill'
/**
 *  native structuredClone or core-js structuredClone polyfill
 * @since 0.0.1
 */
export const structuredCloneSafe = <T>(value: T, options?: StructuredSerializeOptions): T => {
  if (globalThis.structuredClone) {
    return globalThis.structuredClone(value, options)
  }
  return structuredClonePolyfill(value, options)
}
