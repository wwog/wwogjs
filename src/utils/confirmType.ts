/** exclude null */
export const isObject = <T = object>(value: any): value is T => typeof value === 'object' && value !== null
export const isFunction = (value: any): value is Function => typeof value === 'function'
export const isArray = (value: any): value is Array<any> => Array.isArray(value)
export const isBigInt = (value: any): value is bigint => typeof value === 'bigint'
export const isString = (value: any): value is string => typeof value === 'string'
export const isNumber = (value: any): value is number => typeof value === 'number'
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'
export const isUndefined = (value: any): value is undefined => typeof value === 'undefined'
export const isSymbol = (value: any): value is symbol => typeof value === 'symbol'
export const isNull = (value: any): value is null => value === null
export const isRegExp = (value: any): value is RegExp => value instanceof RegExp
export const isDate = (value: any): value is Date => value instanceof Date
export const isError = (value: any): value is Error => value instanceof Error
export const isMap = (value: any): value is Map<any, any> => value instanceof Map
export const isSet = (value: any): value is Set<any> => value instanceof Set
export const isWeakMap = (value: any): value is WeakMap<any, any> => value instanceof WeakMap
export const isWeakSet = (value: any): value is WeakSet<any> => value instanceof WeakSet
export const isPromise = (value: any): value is Promise<any> => value instanceof Promise
export const isFile = (value: any): value is File => value instanceof File
/**
 * only common types
 * @description 'unknown' indicates unknown type
 */
export const typeOf = (value: any) => {
  if (isObject(value)) {
    if (isArray(value)) {
      return 'array'
    }
    if (isMap(value)) {
      return 'map'
    }
    if (isSet(value)) {
      return 'set'
    }
    if (isWeakMap(value)) {
      return 'weakmap'
    }
    if (isWeakSet(value)) {
      return 'weakset'
    }
    if (isFile(value)) {
      return 'file'
    }
    if (isPromise(value)) {
      return 'promise'
    }
    if (isRegExp(value)) {
      return 'regexp'
    }
    if (isDate(value)) {
      return 'date'
    }
    if (isError(value)) {
      return 'error'
    }
    if (value.constructor) {
      if (value.constructor.name === 'Object') {
        return 'object'
      }
    }
    return 'unknown'
  }
  if (isBoolean(value)) {
    return 'boolean'
  }
  if (isNumber(value)) {
    return 'number'
  }
  if (isString(value)) {
    return 'string'
  }
  if (isFunction(value)) {
    return 'function'
  }
  if (isUndefined(value)) {
    return 'undefined'
  }
  if (isNull(value)) {
    return 'null'
  }
  if (isSymbol(value)) {
    return 'symbol'
  }
  if (isBigInt(value)) {
    return 'bigint'
  }
  return 'never' as never
}
/**
 * ToString Interception type.
 */
export const classOf = (value: any) => {
  const { toString } = {}
  return toString.call(value).slice(8, -1)
}
