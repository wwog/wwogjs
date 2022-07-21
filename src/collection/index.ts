import { isArray, isObject } from '@/utils/confirmType'


export class Collection<T extends Record<string, any>> {
  items!: T[]
  constructor(collection?: T | T[]) {
    if (isObject(collection)) {
      if (isArray(collection)) {
        this.items = collection
      } else {
        this.items = [collection]
      }
    } else {
      this.items = []
    }
  }
  [Symbol.iterator] = () => this.items[Symbol.iterator];
  [Symbol.toStringTag] = 'Collection';
  [Symbol.toPrimitive] = () => {
    throw new TypeError('Collection cannot be converted to primitive')
  }
  size = () => this.items.length
  valueOf = () => this.items
}

if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest
  const ins = new Collection([
    { name: 'Jack', age: 18 },
    { name: 'Jason', age: 21 },
    { name: 'Alice', age: 19 },
    { name: 'Bob', age: 20 },
  ])
  it('should be a class', () => {
    expect(Object.prototype.toString.call(ins)).toMatchInlineSnapshot('"[object Collection]"')
  })
}
