#include <stdio.h>
#include <string.h>
#include <stdlib.h>


void test(...){
	
	//va_list args;
	//va_start(args);
	
	//printf("%d", va_arg(args, int));
	//va_list args;
	return;
}

int main(){
	
	char *a = {"ciao"};
	a = malloc();
	a = "ciao lol ciao lel";
	printf("%s, dim: %zu", a, sizeof(a));
	test(1, 2);
	return 0;
}