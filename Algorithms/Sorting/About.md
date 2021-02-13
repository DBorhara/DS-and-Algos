# Sorting

Built in sorting isn't optimal for big data sets.
Custom sorted methods are ideal for big data sets.
Sorting makes data meaningful or we preprocess it.

## The issue with sort()

## Sorting Algorithms

## Bubble Sorting - Elementary Sort

We bubble up the largeest value using multiple passthroughs
Good for nearly sorted data
O(n^2)

## Selection Sorting - Elementary Sort

We bubble down the lowest number
O(n^2)

## Insertion Sorting - Elementary Sort

Not most efficient but when the list is almost sorted it is best
O(n) when almost sorted
Good for small data sets

## Merge Sorting

Divide and Conquer Sorting ( Uses Recursion )
O(n log n)
"The Root Splitter"
Break down array into individual elements than "merge" back together in order
Typically performs better than most algorithms
It is stable(equivalent elements keep order)

## Quick Sorting

Divide and Conquer Sorting ( Uses Recursion )
O(n log n)
Worst case is O(n^2) when bad data or can't guarantee a good pivot point
With random pivot we compare the numbers until all numbers are either less(left of in array) or greater than(right of in the array) pivot
We split the list and use a pivot on the left and right

## Notes

O(n log n)
First n is indicating that we still have to compare everything
log n is because we dont have to compare it to everything else in the list which would be O(n^2)

QuickSort and Mergesort is most used
