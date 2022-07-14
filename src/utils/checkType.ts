import * as confirmType from './confirmType'

export type Checker = (value: any) => boolean
function checkType(checker: Checker) {
  return (value: any) => {
    const res = checker(value)
    if (!res) {
      throw new TypeError(`${value} is not a ${checker.name}`)
    }
    return value
  }
}
/** if not function, an error is reported */
export const functionCherker = checkType(confirmType.isFunction)
/** if not array, an error is reported */
export const arrayCherker = checkType(confirmType.isArray)
/** if not object, an error is reported */
export const objectCherker = checkType(confirmType.isObject)
/** if not string, an error is reported */
export const stringCherker = checkType(confirmType.isString)
/** if not number, an error is reported */
export const numberCherker = checkType(confirmType.isNumber)
/** if not boolean, an error is reported */
export const booleanCherker = checkType(confirmType.isBoolean)
