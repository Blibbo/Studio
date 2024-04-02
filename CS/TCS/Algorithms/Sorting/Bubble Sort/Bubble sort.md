Sorting [[Algorithm]] that one-ups [[Naïve sort]]:
- improves efficiency in the average cases
- greatly improves the best cases
- more time inefficient worse worst case but not really more complex

The idea is each iteration of the overarching loop brings the "heaviest" element that is out of place, in its place.

Complexity:: ${ O(n^{2}) }$.

## Limitations

One of the two directions in which it sorts elements is significantly slower than the other.