---
aliases:
  - Heap
  - Memoria Heap
---
[[program|Programs]] sometimes choose to allocate **heap memory** instead of [[Function Call Stack|stack memory]].
The advantage over stack memory is that this one never gets deallocated automatically.
The catch is you need to **remember to deallocate it manually**, or you'll get a [[memory leak]] and your program will suck.