import { isArray } from '@utils/confirmType'

/* eslint-disable @typescript-eslint/no-empty-function */
type TreeNodeConfig = {
  /**
   * @default nodes
   */
  nodesKey?: string
}

export class TreeNode {
  nodesKey: string
  parent: TreeNode | null = null
  children: TreeNode[] | undefined | null
  constructor(config: TreeNodeConfig) {
    this.nodesKey = config.nodesKey || 'nodes'
  }
  appendChild(child: TreeNode) {
    if (!isArray(this.children)) {
      this.children = []
    }
    this.children.push(child)
    child.parent = this
  }
}

// in-source test
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
}
