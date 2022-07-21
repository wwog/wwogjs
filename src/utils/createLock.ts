export type LockKey = {
  flag?: string
}

export type unlocking = (key: LockKey) => boolean
/**
 * Create a lock, return Key and unlocking methods
 * @param flag
 * @since 0.0.1
 */
export function createLock(flag?: string) {
  const _key: LockKey = { flag }
  return [_key, (key: LockKey) => key === _key] as [LockKey, unlocking]
}
