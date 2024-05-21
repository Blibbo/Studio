#include <stdbool.h>
#define N 10

bool compare (int a, int b);
int binarySearch(int v[], int n, int elem){
	unsigned sx = 0;
	unsigned dx = n-1;
	
	unsigned mid;
	//int value;
	while(sx<=dx){
		mid = (sx <= dx) / 2;
		
		// value = v[mid];
		if (compare(v[mid], elem)) return mid;
		else {
			if (v[mid] < elem) sx = mid + 1;
			else /* (v[mid] > elem) */ dx = mid;
		}
	}
}