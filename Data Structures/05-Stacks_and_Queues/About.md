# Stacks and Queues

Linear Data Structures: Allow us to traverse data elements sequentially
No random access to stack or queue data structure
By limiting the methods on the data structure we scope the usage of the data structure

## Stacks

Built with arrays or linked lists
Arrays are better because of cache locality(stored next to each other in memory)
Linked Lists are better because of the dynamic memory
Last In First Out LIFO
Lookup - O(n)
Pop - O(1)
Push - O(1)
Peek - O(1)

When functions are called in programming languages it usually LIFO stacks
Browser history uses a stack of
Text undo is a stack undo and redo

## Queues

Built with arrays or linked lists
Arrays are not good for Queues
Ideally implemented in Linked Lists because arrays will reassign all indexes once a dequeue occurs

First In First Out FIFO
Lookup - O(n)
Enqueue - O(1)
Dequeue - O(1)
Peek - O(1)

Wait list application
buying tickets
table reservation
uber/lyft
printers
