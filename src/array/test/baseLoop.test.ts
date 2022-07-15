import { baseLoop } from '../baseLoop'
import { describe, it, expect } from 'vitest'

describe('baseLoop', () => {
  it('base', () => {
    const arr = [1, 2, 3, 4, 5]
    const result: number[] = []
    baseLoop(arr, val => {
      result.push(val)
    })
    return expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
