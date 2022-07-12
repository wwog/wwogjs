import { createLock, LockKey } from '@/utils/createLock'

/**
 *  Like Array.ForEach.But it can break the loop
 */
export function baseLoop<T>(arr: T[], callback: BaseLoopCallback<T>) {
  // ECMA-262 : loop range is the size of the initial array
  const { length } = arr
  const [Key, unlocking] = createLock()
  let index = -1
  while (++index < length) {
    const result = callback(arr[index], index, Key)
    if (result && unlocking(result)) {
      break
    }
  }
  //returns the original array.To build a pipeline or method chain.
  return arr
}

export async function baseLoopAsync<T>(arr: T[], callback: BaseLoopCallbackAsync<T>) {
  const { length } = arr
  const [Key, unlocking] = createLock()
  let index = -1
  while (++index < length) {
    const result = await callback(arr[index], index, Key)
    if (result && unlocking(result)) {
      break
    }
  }
  return arr
}

export type GenerateBaseLoopCallback<T, R = void | LockKey> = (
  value: T,
  index: number,
  /** 'return breakKey' break the Loop */
  breakKey: LockKey,
) => R
export type BaseLoopCallback<T> = GenerateBaseLoopCallback<T>
export type BaseLoopCallbackAsync<T> = GenerateBaseLoopCallback<T, void | LockKey | Promise<void | LockKey>>
