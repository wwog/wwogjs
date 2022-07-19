import { structuredClone as structuredClonePolyfill } from 'structured-clone-polyfill'

export const structuredClone = (value: any, options?: StructuredSerializeOptions) => {
  if (window.structuredClone) {
    return window.structuredClone(value, options)
  }
  return structuredClonePolyfill(value, options)
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('should clone a value', () => {
    const value = { a: 1, b: 2, se: new Set([1, 2, 3]) }
    const clone = structuredClonePolyfill(value)
    value.se.add(4)
    expect(clone).toMatchInlineSnapshot(`
      {
        "a": 1,
        "b": 2,
        "se": Set {
          1,
          2,
          3,
        },
      }
    `)
  })
}
