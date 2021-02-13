# Binary Heaps

## Big O

Lookup : O(n) because it is less ordered. No difference between left and right unlike BST
Insert : O(log n)
Delete : O(log n)

Max Heap : Every child has a lower priority or value than its parent
Min Heap : Every child has a higher priority or value than its parent

Can be used in any algorithm where ordering is important

Really great at doing comparitave operations

Add values to the tree from left to right and then bubbles up if value is greater than parent. Can bubble all the way to the top or root node

Memory Heap != Heap Data Structure

## Pros

Better than O(n)
Priority
Flexible Size
Fast Insert

## Cons

Slow Lookup
