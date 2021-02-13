# Binary Trees

## Types

- Perfect Binary Tree
  - It is balanced tree that has everything filled in. All the leaf nodes are full and no node has one child. The bottom layer of tree is completely filled
- Really efficient and desirable
  - First property: The number of total nodes doubles as we move down the tree
  - Second property: The number of nodes on the last level is equal to the sum of all the nodes on the other level plus 1 (Approximately half of nodes are at bottom level)
- Full Binary Tree
  - A node either has 0 or 2 children, never 1.

## O(log n)

### Perfectly Balanced Binary Tree

We can calculate the nodes of the level by 2^n where n is the number of levels

Level 0 : 2^0 = 1 node
Level 1 : 2^1 = 2 nodes
Level 2 : 2^2 = 4 nodes

We can calculate the number of total nodes by 2^h-1 where h is the height of the tree

Number of nodes = 2^h-1
log nodes = height
We dropped -1 because it insignificant

log 100 = 2
10^2 = 100

## Binary Search Tree

### Balanced Big O

Lookup:O(log n)
Insert:O(log n)
Delete:O(log n)

### Unbounded Big O

Lookup:O(n)
Insert:O(n)
Delete:O(n)

Preserves relationships as a hash table does not change

Rules

1. All child nodes to the right of the root node must be greater
2. A node can only have up to two children

Possible Interview Q

Why is an unbalanced binary search tree bad?
Because it changes lookup, insertion, deletion in O(n) almost like a linked list

## Props and Cons

### Pros

- Better than O(n) assuming balance
- Ordered
- Flexible Size because we can place the node anywhere in memory

### Cons

- No O(1) operations

### Comparisons

Arrays: Only better with insertion at the end which is O(1)
Hash Tables: Insert and Search at O(1) but BST has relations of parent child and data is sorted.

## AVL TREES and Red Black Trees
