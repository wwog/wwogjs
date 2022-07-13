export const isObject = (value: any): value is object => typeof value === 'object'
export const isFunction = (value: any): value is Function => typeof value === 'function'
export const isArray = (value: any): value is Array<any> => Array.isArray(value)
export const isString = (value: any): value is string => typeof value === 'string'
export const isNumber = (value: any): value is number => typeof value === 'number'
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'
export const isUndefined = (value: any): value is undefined => typeof value === 'undefined'
export const isNull = (value: any): value is null => value === null
export const isSymbol = (value: any): value is symbol => typeof value === 'symbol'
export const isRegExp = (value: any): value is RegExp => value instanceof RegExp
export const isDate = (value: any): value is Date => value instanceof Date
export const isError = (value: any): value is Error => value instanceof Error
export const isMap = (value: any): value is Map<any, any> => value instanceof Map
export const isSet = (value: any): value is Set<any> => value instanceof Set
export const isPromise = (value: any): value is Promise<any> => value instanceof Promise
