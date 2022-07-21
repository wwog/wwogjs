import { structuredClone as structuredClonePolyfill } from 'structured-clone-polyfill'
/**
 *  native structuredClone or core-js structuredClone polyfill
 */
export const structuredCloneSafe = <T>(value: T, options?: StructuredSerializeOptions): T => {
  if (globalThis.structuredClone) {
    return globalThis.structuredClone(value, options)
  }
  return structuredClonePolyfill(value, options)
}
