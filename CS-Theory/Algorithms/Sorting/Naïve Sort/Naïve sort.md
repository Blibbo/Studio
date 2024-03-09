Sorting [[algorithm]].

Complexity:: ${ O(n^{2}/2) }$.

## Limitations

Every case is equally complex.
Even in cases where the array is already sorted.

## Pseudo code

```lua
while --[[non empty array]] do
	--find the index where the max p is
	if(p < n - 1) then swap(v[n-1], v[p]) end
	--invariant: v[n-1] contains the max element
	--restrict attention to the first n-1 array cells, setting n' = n-1
end
```

## Implementation in [[C]]

```c
#include <stdio.h>

#define N 10

void naiveSort();

void printArray(int v[], int n){
	printf("[ ");
	for(int i=0;i<n;i++){
		printf("%d, ", v[i]);
	}
	printf(" ]\n");
}

int main(){
	int N = 10;
	int v[N];
	
	for (int i=0;i<N;i++){
		v[i] = N-i;
	}

	printArray(v, N);
}
```
![[naivesort.c]]