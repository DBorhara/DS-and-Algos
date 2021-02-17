# Searching + BFS + DFS

## Linear Search

O(n)
Find a target value in a list in sequential order
A for loop is a linear search

In JS indexOf, findIndex, find, and includes are linear

## Binary Search

If sorted O(log n)
If unsorted O(n)
If sorted Divide and Conquer works here with Binary Searching
When we insert we should sort into a list

## Tree Search and Traversals

Traversals - Visiting every node O(n) - Linear Time
Two Ways of Graph/Tree Traversal is Breadth First Search/Traversal and Depth First Search/Traversal
We get O(log n) searching instead of using Arrays O(n) if the tree is balanced. Worst case is O(n)
Good cases for searching and inserting and deleting, plus maintaining order

## Breadth First Searching BFS

We go across and hit each node by level
**If you know the node is closer to the root than this is better**

### Pros for BFS

Shortest Path
Closer Nodes
(Good for Graph Traversal)

### Cons for BFS

More memory

## Depth First Searching DFS

We go until the end of a branch and go back up and restart going downward
**If you know the node is at the lower part of the tree/graph**

InOrder - In a BFS it is generally sequential
PreOrder - Grab the parent, left child all the way, then right child. Good for reacreating the tree
PostOrder - Grab the left child all the way down, right child, then parent. Root is last

             9
           /    \
          4       20
        /  \     /  \
       1    6   15   170

InOrder: [1,4,6,9,15,20,170]
PreOrder: [9,4,1,6,20,15,170]
PostOrder: [1,6,4,15,170,20,9]

### Pros for DFS

Less memory
Does path exist?(Good for looking at paths)

## Cons for DFS

Can get slow
