---
aliases:
  - Coda
---
Data structure with **First-In, First-Out** access to data.

## Operations

- **in**: insert an element to the end of the queue
- **out**: extract the first element in queue
- **getFirst**: read the first element (no extraction)
- **isEmpty**: is the queue empty

These names aren't standard

# Circular arrays

Implementing queues so that both the in and out operations have ${ O(1) }$ complexity (you'd shift the whole array in one of the two operations otherwise, with ${ O(N) }$ complexity) consists in making the array "circular" so that the element after ${ N-1 }$ is ${ 0 }$

[Status::unfinished] rephrase part about circular arrays