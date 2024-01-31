#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "uthash.h"

void option1() {
    printf("You chose option 1.\n");
}

void option2() {
    printf("You chose option 2.\n");
}

void option3() {
    printf("You chose option 3.\n");
}

typedef struct {
    const char *name;
    void (*action)();
    UT_hash_handle hh;
} Option;

Option *options = NULL;

void addOption(const char *name, void (*action)()) {
    Option *opt = (Option *)malloc(sizeof(Option));
    opt->name = name;
    opt->action = action;
    HASH_ADD_KEYPTR(hh, options, opt->name, strlen(opt->name), opt);
}

Option *getOption(const char *name) {
    Option *opt;
    HASH_FIND_STR(options, name, opt);
    return opt;
}

int main() {
    addOption("option1", option1);
    addOption("option2", option2);
    addOption("option3", option3);
    // Add more options as needed

    char input[20];
    printf("Enter a string: ");
    scanf("%s", input);

    Option *opt = getOption(input);
    if (opt != NULL) {
        opt->action();
    } else {
        printf("Invalid option.\n");
    }

    // Free the memory used by the hash table
    Option *current_option, *tmp;
    HASH_ITER(hh, options, current_option, tmp) {
        HASH_DEL(options, current_option);
        free(current_option);
    }

    return 0;
}
