# Linked Lists

Pros

- Fast Insertion
- Fast Deletion
- Ordered
- Flexible Size
- Over arrays for simplicity and ability to grow and shrink as needed

## Cons

- Slow lookup
- More memory

## Singly vs Doubly Linked Lists

### Singly Link List Pros

- Fairly simple implementation
- Lesser memory usage
  - Delete and insert is a little faster

### Singly Linked List Cons

- Can not be iterated over in reverse or traversed back to front
  - If we lose this.head location we can lose it to memory forever

### When to use Singly Linked List

- When you have less memory or memory is expensive to use
- Main goal is fast insertion and deletion, Not much searching

### Doubly Linked List Pros

- Can be iterated over in reverse or traversed from front and back
- If you need to delete a previous node you can go backwards

### Doubly Linked List Cons

- It is fairly complex
- Requires more memory and storages
- Extra operations to update

### When to use the Doubly Linked List

- Not much limitation on memory
- Good operation on searching for elements a la searching backwards

## EXTRA

Most of the time you will see singly linked list in interviews
