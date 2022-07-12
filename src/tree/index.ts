/* eslint-disable @typescript-eslint/no-empty-function */
type TreeConfig = {
  /**
   * @default nodes
   */
  nodesKey?: string
}
export class Tree {
  nodes: Tree[] = []
  nodesKey: string
  length = this.nodes.length
  constructor({ nodesKey = 'nodes' }: TreeConfig = {}) {
    this.nodesKey = nodesKey
  }
  append(node: Tree) {
    this.nodes.push(node)
  }
  appendNodes(nodes: Tree[]) {
    this.nodes.push(...nodes)
  }
}

// in-source test
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  const tree = new Tree()
  it('xxx', () => {
    expect(tree).toMatchInlineSnapshot(`
      Tree {
        "length": 0,
        "nodes": [],
        "nodesKey": "nodes",
      }
    `)
  })
}
