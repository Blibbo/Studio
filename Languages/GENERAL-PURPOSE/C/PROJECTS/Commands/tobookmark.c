#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "utils.h"

#define MAX_STR 25
#define PREFIX ("javascript:(function(){")
#define SUFFIX ("})();")
#define OUTPUT_EXTENSION (".txt")

int main(int argc, char* argv[]){
	
	char* sourceName = argv[1];
	
	if(!sourceName){
		printf("Usage: %s <file name>", argv[0]);
		return 1;
	}
	
	/*FILE* source = fopen(sourceName, "r");
	if(source == NULL){
		perror("fopen");
		return 1;
	}*/
	
	int* a = (int*)calloc(10, sizeof(int));
	printf("%d\n", _msize(a));
	perror("");
	
	char* lastDot = strrchr(sourceName, '.');
	if(lastDot == NULL){
		lastDot = &sourceName[strlen(sourceName)];
		printf("%d\n", _msize(sourceName));
		printf("%c\n", *lastDot);
	}
	*lastDot = '\0';
	char outputName[MAX_STR];
	snprintf(outputName, sizeof(outputName), "%s%s", sourceName, OUTPUT_EXTENSION);
	
	printf("%s", outputName);
	
	/*FILE* output = fopen(outputName, "w");
	
	char c;
	while((c = fgetc(source)) != EOF){
		fputc(c, output);
		printf("%c");
	}
	
	fclose(output);
	fclose(source);*/
}