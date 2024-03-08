When iterating over data structures, if your index is any combination of:
- always 1 step forward
- skipping a single element
- always 1 step backward
- reading an extra element
then yours counts as an off-by-one error.

The mistake can happen either in the index initialization or loop condition.
Nitpicky logic that must be taken care of.

## Example in [[C]]

Trying to print an array's contents
```c
int myArray[] = {1,2,3,4};

for(int i=1;i<4;i++){
	printf("%d ", myArray[i]);
}
```
output: `2, 3, 4`: it's **off by one**.