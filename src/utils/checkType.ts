import * as confirmType from './confirmType'

export type Checker = (value: any) => boolean
function checkType(checker: Checker) {
  return (value: any) => {
    const res = checker(value)
    if (!res) {
      throw new TypeError(`${value} is not a ${checker.name}`)
    }
  }
}
/** if not function, an error is reported */
export const functionCherker = checkType(confirmType.isFunction)
/** if not array, an error is reported */
export const arrayCherker = checkType(confirmType.isArray)
