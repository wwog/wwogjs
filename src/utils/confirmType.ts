export const isObject = (value: any) => typeof value === 'object'
export const isFunction = (value: any) => typeof value === 'function'
export const isArray = (value: any) => Array.isArray(value)
export const isString = (value: any) => typeof value === 'string'
export const isNumber = (value: any) => typeof value === 'number'
export const isBoolean = (value: any) => typeof value === 'boolean'
export const isUndefined = (value: any) => typeof value === 'undefined'
export const isNull = (value: any) => value === null
export const isSymbol = (value: any) => typeof value === 'symbol'
export const isRegExp = (value: any) => value instanceof RegExp
export const isDate = (value: any) => value instanceof Date
export const isError = (value: any) => value instanceof Error
export const isMap = (value: any) => value instanceof Map
export const isSet = (value: any) => value instanceof Set
export const isWeakMap = (value: any) => value instanceof WeakMap
export const isWeakSet = (value: any) => value instanceof WeakSet
export const isPromise = (value: any) => value instanceof Promise
export const isNullOrUndefined = (value: any) => isNull(value) || isUndefined(value)
export const isNotNullOrUndefined = (value: any) => !isNullOrUndefined(value)
