#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include "uthash.h"
#include "utils.h"

void posix(){
	perror("Standard/POSIX errors");
	return;
}

typedef struct {
    const char *name;
    int (*action)();
    UT_hash_handle hh;
} Option;

Option *extensionsTable = NULL;

void addOption(const char *name, int (*action)()) {
    Option *opt = (Option *)malloc(sizeof(Option));
    opt->name = name;
    opt->action = action;
    HASH_ADD_KEYPTR(hh, extensionsTable, opt->name, strlen(opt->name), opt);
}

/*
*	1: there are posix errors
*	0: success
*/

int compileC(Option* this, char* sourceName, char* name) {
	int commandLen = strlen("gcc ") + strlen(sourceName) + strlen(" -o ") + strlen(name) + strlen(".exe");
	size_t commandSize = commandLen * sizeof(char) + sizeof(char);
	char* command = (char*)malloc(commandSize);
	if(command == NULL){
		errno = ENOMEM;
		return 1;
	}
	
	snprintf(command, commandSize, "gcc %s -o %s.exe", sourceName, name);
	system(command);	
	return 0;
	
}

int compileCpp(Option* this, char *sourceName, char* name) {
	int commandLen = strlen("g++ ") + strlen(sourceName) + strlen(" -o ") + strlen(name) + strlen(".exe");
	size_t commandSize = commandLen * sizeof(char) + sizeof(char);
	char* command = (char*)malloc(commandSize);
	if(command == NULL){
		errno = ENOMEM;
		return 1;
	}
	
	snprintf(command, commandSize, "g++ %s -o %s.exe", sourceName, name);
	system(command);
	return 0;
}

int compileJava(Option* this, char *sourceName, char* name) {
	int commandLen = strlen("javac ") + strlen(sourceName);
	size_t commandSize = commandLen * sizeof(char) + sizeof(char);
	char* command = (char*)malloc(commandSize);
	if(command == NULL){
		errno = ENOMEM;
		return 1;
	}
	
	snprintf(command, commandSize, "javac %s", sourceName);
	system(command);
	return 0;
}

Option *getOption(const char *name) {
    Option *opt;
    HASH_FIND_STR(extensionsTable, name, opt);
    return opt;
}

int main(int argc, char** argv){
	
	char* sourceName = argv[1];
	if(!sourceName){
		printf("Usage: %s <filename>\n", argv[0]);
		return 1;
	}
	
	char *extension = NULL, *name = NULL;
	if(decomposeFileName(sourceName, &name, &extension) == 1){
		printf("File has no extension.\n");
		return 1;
	}
	
	//handle hash stuff
    addOption("c", compileC);
    addOption("cpp", compileCpp);
	addOption("java", compileJava);


	Option *opt = getOption(extension);
    if (opt != NULL) {
        if(opt->action(opt, sourceName, name) == 1){
			posix();
			
			// Free the memory used by the hash table
			Option *current_option, *tmp;
			HASH_ITER(hh, extensionsTable, current_option, tmp) {
				HASH_DEL(extensionsTable, current_option);
				free(current_option);
			}
			free(name);
			return 1;
		}
    } else {
        printf("Extension \"%s\" not supported.\n", extension);
		
		// Free the memory used by the hash table
		Option *current_option, *tmp;
		HASH_ITER(hh, extensionsTable, current_option, tmp) {
			HASH_DEL(extensionsTable, current_option);
			free(current_option);
		}
		free(name);
		return 1;
    }

    // Free the memory used by the hash table
    Option *current_option, *tmp;
    HASH_ITER(hh, extensionsTable, current_option, tmp) {
        HASH_DEL(extensionsTable, current_option);
        free(current_option);
    }
	
	free(name);
	return 0;
}