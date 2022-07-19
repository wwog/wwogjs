import { structuredClone as structuredClonePolyfill } from 'structured-clone-polyfill'
/**
 *  native structuredClone or core-js structuredClone polyfill
 */
export const structuredClone = (value: any, options?: StructuredSerializeOptions) => {
  if (window.structuredClone) {
    return window.structuredClone(value, options)
  }
  return structuredClonePolyfill(value, options)
}
