import { createLock, LockKey } from '@/utils/createLock'

/**
 *  Like Array.ForEach.But it can break the loop
 *  @since 0.0.1
 */
export const baseLoop = <T>(arr: T[], callback: BaseLoopCallback<T>) => {
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
}
/**
 * @since 0.0.1
 */
export const baseLoopAsync = async <T>(arr: T[], callback: BaseLoopCallbackAsync<T>) => {
  const { length } = arr
  const [Key, unlocking] = createLock()
  let index = -1
  while (++index < length) {
    const result = await callback(arr[index], index, Key)
    if (result && unlocking(result)) {
      break
    }
  }
}
/**
 * rtl version of baseLoop
 * @since 0.0.1
 */
export const baseLoopRight = <T>(arr: T[], callback: BaseLoopCallback<T>) => {
  const { length } = arr
  const [Key, unlocking] = createLock()
  let index = length
  while (--index >= 0) {
    const result = callback(arr[index], index, Key)
    if (result && unlocking(result)) {
      break
    }
  }
}
/**
 * rtl version of baseLoopAsync
 * @since 0.0.1
 */
export const baseLoopRightAsync = async <T>(arr: T[], callback: BaseLoopCallbackAsync<T>) => {
  const { length } = arr
  const [Key, unlocking] = createLock()
  let index = length
  while (--index >= 0) {
    const result = await callback(arr[index], index, Key)
    if (result && unlocking(result)) {
      break
    }
  }
}

export type GenerateBaseLoopCallback<T, R = void | LockKey> = (
  value: T,
  index: number,
  /** 'return breakKey' break the Loop */
  breakKey: LockKey,
) => R
export type BaseLoopCallback<T> = GenerateBaseLoopCallback<T>
export type BaseLoopCallbackAsync<T> = GenerateBaseLoopCallback<T, void | LockKey | Promise<void | LockKey>>
