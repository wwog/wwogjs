import { baseLoop, baseLoopRight, baseLoopAsync, baseLoopRightAsync } from '../baseLoop'
import { describe, test, expect } from 'vitest'

const arr = [1, 2, 3, 4, 5]

describe('baseLoop', () => {
  test('baseLoop function loop test', () => {
    baseLoop(arr, (val, index) => {
      expect(val).toBe(index + 1)
    })
  })

  test('baseLoop function break loop test', () => {
    const result: number[] = []
    baseLoop(arr, (val, index, breakKey) => {
      if (index === 3) {
        return breakKey
      }
      result.push(val)
    })
    expect(result).toEqual([1, 2, 3])
  })
})

describe('baseLoopRight', () => {
  test('baseLoopRight function loop test', () => {
    const result: number[] = []
    baseLoopRight(arr, val => {
      result.push(val)
    })
    expect(result).toEqual([5, 4, 3, 2, 1])
  })
})

describe('baseLoopAsync', () => {
  test('baseLoopAsync function asynchronous test', async () => {
    const start = Date.now()
    await baseLoopAsync([1, 2], async () => {
      await new Promise(resolve => setTimeout(resolve, 200))
    })
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(400)
  })
})

describe('baseLoopRightAsync', () => {
  test('baseLoopRightAsync function asynchronous test', async () => {
    const start = Date.now()
    await baseLoopRightAsync([1, 2], async () => {
      await new Promise(resolve => setTimeout(resolve, 200))
    })
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(400)
  })
})
