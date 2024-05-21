#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define N 10

void swap(int* a, int* b){
	int c = *a;
	*a = *b;
	*b = c;
}

int findMax(int v[], int n){
	if (n <= 0) return -1;
	
	int iMax = 0;
	int vMax = v[iMax];
	
	for(int i=1;i<n;i++){
		if(vMax < v[iMax]){
			iMax = i;
			vMax = v[i];
		}
	}
	return iMax;
}

void naiveSort(int v[], int n){
	int iMax;
	while(n > 1){
		iMax = findMax(v, n);
		swap(&v[iMax], &v[n - 1]);
		n--;
	}
};

void printArray(int v[], int n){
	printf("[ ");
	for(int i=0;i<n;i++){
		printf("%d, ", v[i]);
	}
	printf(" ]\n");
}

void bubbleSort(int v[], int n){
	bool ordered = false;
	while((n>1) && !ordered){
		ordered = true;
		for(int i=0; i<n; i++){
			if(v[i] > v[i+1]){
				swap(&v[i], &v[i+1]);
				ordered = false;
				printArray();
			}
		}
		n--;
	}
}

void shakerSort(int v[], int n){
	bool ordered = false;
	
	int left = 0, right = -1;
	
	while ((left < right) && !ordered){ //to while(!ordered)
		ordered = true;
		
		for(int i = left; i < right; i++){
			if(v[i] > v[i+1]){
				swap(&v[i], &v[i+1]);
				ordered = false;
			}
		}
		if(ordered) return;
		left--;
		for(int i = right; i > left; i--){
			if(v[i] < v[i-1]){
				swap(&v[i], &v[i-1]);
				ordered = false;
			}
		}
		left++;
	}
}

int main(){
	int v[N];
	
	for (int i=0;i<N;i++){
		v[i] = N-i;
	}

	printArray(v, N);
	
	bubbleSort(v, N);
	
	printArray(v, N);
	
	system("pause");
}