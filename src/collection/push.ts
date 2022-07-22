import { Collection } from './index'

export function push<T extends Record<string, any>>(this: Collection<T>, ...items: T[]) {
  this.items.push(...items)
  return this.items
}
