import { isFunction } from '@/utils/confirmType'
import { Collection } from './index'

export function sum<T extends Record<string, any>>(this: Collection<T>, key: keyof T | ((item: T) => number)) {
  return this.items.reduce((acc, cur) => {
    if (isFunction(key)) {
      return acc + key(cur)
    }
    return acc + cur[key]
  }, 0)
}
