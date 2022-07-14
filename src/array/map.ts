import { baseLoop, baseLoopAsync, GenerateBaseLoopCallback } from './baseLoop'

type MapCallback<T, U> = GenerateBaseLoopCallback<T, U>
type MapCallbackAsync<T, U> = GenerateBaseLoopCallback<T, Promise<U>>
/**
 *  Like Array.map.But it can break the loop
 */
export const map = <T, U = any>(array: T[], fn: MapCallback<T, U>): U[] => {
  const result: U[] = []
  baseLoop(array, (value, index, breakKey) => {
    const res = fn(value, index, breakKey)
    if (res === breakKey) {
      return res
    }
    result.push(res)
  })
  return result
}

export const mapAsync = async <T, U = any>(array: T[], callback: MapCallbackAsync<T, U>): Promise<U[]> => {
  const result: U[] = []
  await baseLoopAsync(array, async (value, index, breakKey) => {
    const res = await callback(value, index, breakKey)
    if (res === breakKey) {
      return res
    }
    result.push(res)
  })
  return result
}
