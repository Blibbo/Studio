---
tags:
  - standard
  - strongly-typed
aliases:
  - ANSI C
  - C89
  - ISO C
  - C Standard
---
[Status::unfinished]
[[#^quirky-headers]]
Statically typed [[Programming Language]].
Implements [[Imperative Programming]] and [[Procedural programming]].

The standard for this language is composed of its syntax + a standard library. The standard library implementation may vary, but the [[interface]] is the same everywhere.


Here's my [Reference](https://devdocs.io/c/) of choice for the C standard library.

---

## Build process

The whole process is somewhat mistakenly called "compilation"; though compilation is also the name of the middle step of the build process for C programs.

Your [[Source File]]s  should typically have a `.c` extension.

### Preprocessing

The **preprocessor** is a text replacement tool that cuts out all preprocessor code ([[#^comments]] and [[#preprocessor directives]]) from your source files. These pieces of code are often highlighted in green in code editors.
When green code gets cut out, based on the directive, different operations get performed to the text file.

By the time the preprocessor is done preprocessing, your source file may look significantly different from how you wrote it. This preprocessed source file is now called a **translation unit**.

### Compilation

The **compiler** is a tool that is able to translate the translation units.
It translates them into **object files**, which are essentially machine code, flagged with **symbols**.
Symbols are all the names contained in your code: variable names, functions, etc.

Object files typically have a `.o` extension

The compiler acts individually on translation units, so if the program as a whole (in its multiple source files) isn't coherent, it will not know, as long as each unit is consistent with its symbols (i.e if they all exist and don't contradict each other).

The compiler throws an error when it encounters an unknown symbol, which is why we have [[#^function-signatures]]: to tell it to shut up, because the symbol is known and is simply in another file.

### Linking

The linker is a tool that resolves symbols among multiple object files and tries to build an executable that only strictly has the symbol definitions required for the "main" function to execute.
The process of stripping away unused symbols and their relative code is called **dead code elimination**.

The linker will throw an error if it sees symbols with multiple definitions.

The [[ODR|One Definition Rule]] says that each symbol has to be defined once when a program reaches this point in the build process.
However, if you think about header files and about how you define structs once PER translation unit that uses the header, you're always violating the ODR.
The linker is able to merge struct definitions because they are simple layout descriptions. (same as function signatures, which are also merged into one definition)
Complex scenarios (things you can't declare in header files included by multiple sources) are:
- inline functions (even just the signatures)
- static variables
- elements with actual executable code (function implementations etc)

### Tools

The following software is a mix of tools, but i suggest [[gcc]] because it's the most complete.

```dataview
TABLE FROM ("Software/Programming/Translators" OR "Software/Programming/Linkers" OR "Software/Programming/Debugging") AND [[C]]
```

---

## Standard Library Headers

- **About the headers**
	- **The basics:**
		- [[#^include-standard-header|here]]'s the syntax to include headers.
		- include before using any of its contents
		- watch out for guards: things won't be defined twice. You can trace back a definition to the first relevant header inclusion
		- you won't _need_ to most of the time. There are [isolated cases](https://www.quantstart.com/articles/Mathematical-Constants-in-C/) where this is important
	- **Quirky and funny ~~and absolutely FUCKING despicable~~ behavior:** ^quirky-headers
		- if you call a standard library header function (any function in the "**Functions:**" section of the headers) WITHOUT including the corresponding header, the code _will not_ throw an error
		- what _will_ happen though is you might encounter unpredictable and potentially code-breaking behavior
		- compilers will often throw warnings but try to execute anyway
		- God knows where they attempt to get the function implementation from
		- simply _INCLUDE_. _THE_. _HEADER_.
	- **Unimportant info:**
		- implementation varies based on the environment. The [[#^ANSI]] specification only standardizes what the headers have to offer
		- a header might define a [[#^macro]] indirectly by simply including _another_ header. This might be the case for [[#^stdio]] including [[#^stddef]] to have [[#^NULL]], for example
		- this isn't the rule. The way [[Visual Studio]] handles it, for example, is having a _third_ arbitrary header included by both stdio and stddef.
- `{c}stddef.h` ^stddef
	- **Macros:**
		- `{c}NULL` ^null
			```c
			#ifndef NULL
			#define NULL ((void*)0)
			#endif
			```
			- it's a pointer to a non existing memory location
	- **Types:**
		- `{c}size_t`
			- [[#^unsigned]] integer
- `{c}stdio.h` ^stdio
	- **Additional headers it includes:**
		- [[#^stdint-header]]
	- **Info:**
		- **Format describers:** ^format-describers
			- `{c}"%d"` 'digit'. Prints in `{c}int` ('A' will be printed as 65)
			- `{c}"%f"` prints in `{c}float`
			- `{c}"%.2f"` prints in `{c}float` with a precision of 2
			- `{c}"%lf"` prints in `{c}double`
			- `{c}"%.2lf"` prints in `{c}double`, precision of 2
			- `{c}"%Lf"` prints in `{c}long double`
			- `{c}"%.2Lf"` prints in `{c}long double`, precision of 2
			- `{c}"%c"` prints in `{c}char`
			- `{c}"%p"` prints memory address
			- `{c}"%ld"` prints in `{c}long int`
			- `{c}"%s"` prints string (`{c}char*`)
			- `{c}"%zu"` prints in `{c}size_t`
			- `{c}"%lu` prints in `{c}long unsigned`
			- **How to use them:**
				- add as many as you like in a format string parameter
				- the following parameters will fill in the spaces of the format describers within the string
				- **EXAMPLE**
					`{c}printf("%d hello %d", 3, 2); //"3 hello 2"`
		- **ESCAPE CHARACTERS:**
			- `{c}'\\'` regular backslash
			- `{c}'\n'` new line ^new-line
				- on [[Windows]], it stands for `{c}'\r\n'`
					- which means, [[ASCII#^carriage-return]] and [[ASCII#^line-feed]]
			- `{c}'\t` tabulation
		- **Documentation**
			- [Uni File](http://www.diit.unict.it/users/mpalesi/COURSES/LDI_02-03/DISPENSE/files.pdf)
			- [tutorialspoint](https://www.tutorialspoint.com/c_standard_library/stdio_h.htm)
	- **Macros:**
		- `{c}NULL`
			- same as [[#^NULL]]
		- `{c}EOF` ^eof
			- `{c}#define EOF (-1)`
			- functions like [[#^fscanf]] and [[#^fgetc]] return this if there's no more stuff to read in the file (the internal pointer reached the end)
		- `{c}stdin` ^stdin
			- [[#^file|FILE*]] stream for reading from the console
			- pass it to [[#^fscanf]] to make it become identical to [[#^scanf]]
		- `{c}stdout` ^stdout
			- [[#^file|FILE*]] stream for writing in the console
			- pass it to [[#^fprintf]] to make it become identical to [[#^printf]]
		- `{c}stderr`
			- [[#^file|FILE*]] stream for errors
	- **Types:**
		- `{c}FILE` ^file
			- functions in this header want variables of this [[#^structs|struct]] type passed back and forth
			- just tag along. Give it to them when they require it
	- **Functions:**
		- `{c}printf("format describer string %d", intParameter);` ^printf
			- prints stuff
			- returns number of characters printed
			- example calls:
				- `{c}printf("print this string");`
				- `{c}printf("i ate %d bananas today", 3);`
					- `{c}//i ate 3 bananas today`
				- `{c}printf("i ate %d bananas and %d apples today", 3, 2);`
					- `{c}//i am going to get diabetes`
		- `{c}scanf("%d", &intVar);` ^scanf
			- returns number items successfully saved in memory
			- behavior similar to [[#^printf|printf]]
				- first parameter is format
				- can read more than 1 value at once (separate with space on standard input)
			- if there's anything other than a format describer in the first parameter then you'll scan but not save in memory
			- stands for "_scan formatted_"
		- `{c}snprintf(stringVar, sizeof(stringVar), formatString, ...);`
			- rewrites `{c}stringVar` to make it contain what you read from the format
			- **Concatenate Strings:** ^string-concatenation
				- `{c}snprintf(concatenated, sizeof(concatenated), "%s%s", string1, string2);`
		- `{c}fopen("file name", mode);` ^fopen
			- `{c}mode` accepted values:
				- `{c}"r"` read only
				- `{c}"w"` write from scratch (if it doesn't exist, you'll make it. If it does, overwrite)
				- `{c}"a"` append (write at the end of the file)
				- `{c}"r+"` read and also write (the file must already exist)
				- `{c}"w+"` write and also read
			- returns a pointer to [[#^file|FILE]]
			- returns [[#^NULL]] in case of failure
			- if `{c}NULL`, [[#^perror]] will display `{c}"No such file or directory"`
		- `{c}fclose(FILE* f);`
			- closes the file, obviously
			- ALSO, more importantly, flushes the buffer
			- as if calling [[#^fflush]]
		- `{c}fscanf(stream, formatString, ...)` ^fscanf
			- `...` could be as many parameters as specified by the format string
			- `{c}stream` is of type pointer to [[#^file|FILE]]
				- ^ to get such a type, just call [[#^fopen]] (with reading permissions)
			- identical behavior to [[#^scanf]]
		- `{c}fprintf(stream, formatString, ...)` ^fprintf
			- `...` could be as many parameters as specified by the format string
			- `{c}stream` is of type pointer to [[#^file|FILE]]
				- ^ to get such a type, just call [[#^fopen|fopen]] (with writing permissions)
			- identical behavior to [[#^printf]]
		- `{c}fgetc(FILE* f);` ^fgetc
			- get character from file
			- returns [[#^EOF]] if there's nothing else to read
		- `{c}getchar();` ^getchar
			- [[#^fgetc]] but the file is [[#^stdin]]
			- [[#^EOF]] gets returned when the user enters a line starting with `Ctrl + Z`, which renders as `^Z`
		- `{c}fputc(char character, FILE* f);`
		- `{c}putchar(char c);`
			- [[#^fputc]] but the file is [[#^stdout]]
		- `{c}perror("myString");` ^perror
			- writes to [[#^stdout]] `{c}"myString: "` followed by [[#^strerror]] with the last error code
			- if the given string is empty, it doesn't print `{c}": "` and just prints the error message instead
		-  `{c}rewind(FILE* f);`
			- internal pointer goes back to the beginning of the file
		- `{c}fflush(FILE* f);` ^fflush
			- empty the internal stdio buffer
			- actually write shit in the file NOW during execution
			- you're forced to wait for a [[#^new-line|\n]] to actually flush. Flushing won't work otherwise
			- as in, the internal pointer must point to `\n`
			- https://library.weschool.com/lezione/programmazione-c-i-comandi-fflush-e-getchar-451.html
- `{c}stdlib.h` ^stdlib
	- **Macros:**
		- `{c}EXIT_SUCCESS`
			- it's just `{c}0`
			- use it to replace `{c}0` in `{c}return 0;` in the `{c}main()` function
			- `{c}main` finishes correctly
		- `{c}EXIT_FAILURE`
			- it's just `{c}1`
			- use it to replace `{c}1` in `{c}return 1;` in the `{c}main()` function
			- `{c}main` throws an error
	- **Functions:**
		- `{c}system("command && othercommand");` ^system
			- execute one [[batch|batch]] line
		- `{c}malloc(bytesNum);` ^malloc
			- allocates memory
			- the memory to allocate gets picked from the heap
			- returns type `{c}void*`, typecast it to a specific pointer type.
			
			- **Example:**
				- `{c}int* p = (int*)malloc(sizeof(int)*4)`
		- `{c}calloc(arrayLen, singleCellLengthInBytes);` ^calloc
			- same thing as malloc, but sets allocated memory to 0
			- just use calloc.
			- you don't need to typecast it
		- `{c}free(pointer);`
			- free my boy
			- `{c}pointer==NULL` NOT guaranteed
			- deallocates the pointer's memory obviously
		- `{c}realloc(pointer, newBytes);` ^realloc
			- if it succeeds:
				- `{c}pointer` is deallocated
				- it returns the address of the newly allocated memory
			- if it fails:
				- returns null
				- doesn't deallocate the old pointer
			- good approach:
				```c
				int* vAux = realloc(v, arrayLen, sizeof(int));
				if(vAux == NULL){
					errno = ENOMEM;
					return 1;
				}
				v = vAux;
				```
		- `{c}qsort(array, arrayDim, elmSizeInBytes, compareFunction);`
			- `compareFunction`
- `{c}string.h`
	- **Functions:**
		- `{c}strcmp(firstString, secondString);`
			- returns 0 if the strings are equal
			- returns 1 if `{c}firstString > secondString`
			- returns -1 if `{c}firstString < secondString`
		- `{c}strlen(myString);`
			- returns the length of the string
			- doesn't count string terminator (`{c}'\0'`)
			- if string begins with `{c}'\0'`, length is `{c}0`
		- `{c}strrchr(myString, 'c');`
			- returns a pointer to the _last_ iteration of a character within a string
			- useful for finding the relevant `{c}'.'` for file extensions
		- `{c}strcpy(buffer, source);`
			- pass 2 strings. copies `{c}source` into `{c}buffer`
		- `{c}strchr(myString, 'c');`
			- returns a pointer to the _first_ iteration of a character within a string
			- (different functions. One is `{c}strrchr` with 2 rs, this one has 1 r)
		- `{c}strerror(myInteger)` ^strerror
			- returns a string containing a message that translates the C error code integer
			- **Error Codes:**
				- [[#^posix-error-codes]]
- `{c}stdint.h` ^stdint
	- **Types:**
		- `{c}intptr_t` memory address signed
		- `{c}uintptr_t` memory address unsigned
			- use this to cast [[#^pointers]] to int
		- `{c}int8_t` 8 bytes signed
		- `{c}uint8_t` 8 bytes unsigned
		- `{c}int16_t` 16 bytes signed
		- `{c}uint16_t` 16 bytes unsigned
- `{c}limits.h`
	- **Macros:**
		- `{c}ULLONG_MAX` _C99+_
			- biggest number for `{c}unsigned long long`
		- `{c}SHRT_MAX`
		- `{c}INT_MAX` biggest value for the int data type
		- `{c}INT_MIN` take a wild guess homeboy
- `{c}stdbool.h` ^stdbool
	- _C99+_
	- **Types:**
		- `{c}bool`
			- `{c}typedef _Bool bool;`
	- **Macros:**
		- `{c}true`
			- probably 1
		- `{c}false`
			- 0
- `{c}math.h` ^math-header
	- **Functions:**
		- `{c}sqrt(yourNumber);`
			- square root
		- `{c}sin(num)`
			- sine
		- `{c}cos(num)`
			- cosine
- `{c}unistd.h`
	- **Functions:**
		- `{c}getcwd(stringVar, stringSize);`
			- get your current path in the [[batch|Command Prompt]] when you execute this .exe
			- can fail, use [[#^perror]]
			- NOT the path the .exe is contained in (_can_ be the same though)
			- rewrites `{c}stringVar` so that it contains the path
- `{c}stdarg.h` 
	- interacts with the [[#^variadic-macro]]
	- **Macros:**
		- `{c}va_list`
			- type for declaring an argument list
		- `{c}va_start(myList, )`
		- `{c}va_end(list)`
		- `{c}va_arg(list, type)`
			- `{c}va_arg(list, int);`
- `{c}float.h`
	- **Constants:**
- `{c}assert.h`
	- identify logical errors
- `{c}errno.h`
	- test error return codes from other libraries' functions
	- **Global variables:**
		- `{c}errno`
			- contains the error number
			- functions like [[#^printf]] set this to be caught by [[#^perror]]
	- **Macros:**
		- [[#^posix-errors]]
	
---

## Syntax

This is the syntax of the language according to the standard.
I put the version of the standard in some of these.

### Data Types

#### Scalars

##### Primitive Types

- `{c}char` ^char
	- Character type.
	- 1 byte long.
	- It's a number for all intents and purposes. However, it's meant to be codified through [[ASCII]].
	  You can see it clearly on the [[#character literal]].
- `{c}int` ^int
	- [[Integer]] type.
	- 2, 4 or 8 bytes (depends on the system's word).
	- Accepts the [[#^short]], [[#^long]] and [[#^unsigned]] qualifiers.
	  You can stack up to two `{c}long` qualifiers: `{c}long long int`.
	- You can omit the `{c}int` keyword if you use any of the qualifiers.
	  The qualifiers implicitly become integer types if no other is specified.
- `{c}float` ^float
	- [[Floating-point]] number type.
	- Typically `4` bytes long.
- `{c}double` ^double
	- Floating-point
	- Typically `8` bytes long.
	- Accepts the `{c}long` qualifier. Just one. You can't stack them like with [[#^int]].

##### User-defined Types

User-defined types are types defined through code.
To allow for this to happen, there are two keywords: `{c}enum` and `{c}typedef`.

###### Enum

Stands for **enumeration**.

###### Typedef

This keyword doesn't implement any new functionality to the language.
All it does is allowing you to make shorthands for existing types, for brevity.

**Examples:**
```c
typedef int myArrayType[10];
myArrayType v;
```

This example replaces the tedious [[#^declare-struct|struct declaration syntax]] with this shorter one:
```c
struct myStruct{
	char myChar;
};
	
typedef myStruct myType;
myType myRecord = {'c'}
```

---

#### Structured types

They represent organized structures of [[#primitive types|primitively typed]] variables.

##### Array

Implements [[Array (CDT)]].
It accepts the [[#const]] qualifier. `{c}const` protects **all** the array elements.
- `{c}const int vec[] = {1, 2, 3}`
- `{c}const int *a = (int[]){1, 2, 3};`
	- Assign an [[#Array Compound Literal]] to a pointer.

- **Through functions:**
	- `{c}void myFunction(int myArrayFormalParameter[]);`
	- `{c}void myFunction(int* myArrayFormalParameter);`

###### Statically allocated

These arrays go in the [[Function Call Stack]].
- `{c}int v[INT_MACRO];`
- `{c}int v[3] = {1,2,3};`
	- _C99+_
- `{c}int v[] = {1,2,3};`

###### Dynamically allocated arrays

These arrays are allocated in the [[Heap Memory]] of the program.
They require manual deallocation through [[#^free]].

- `{c}int* v = malloc(arrayLen * sizeof(int));`
	- See [[#^malloc]] for more.
- `{c}int* v = calloc(arrayLen, sizeof(int
	- See [[#^calloc]] for more.
- `{c}int* vAux = realloc(v, arrayLen, sizeof(int));`
	- See [[#^realloc]] for context.

##### String

`{c}char*` or `{c}char[]`.
They're just [[#array|arrays]] of [[#^char|characters]].
They're functionally identical to arrays, except for the fact that [[#String Literal|string literals]] can be directly returned by functions, while [[#Array Literals]] cannot.

##### Struct

Structs are heterogeneous data structures.
They're passed by value by default. They are **not** pointed structures.
```c
struct myStruct{
	char myString[20]; //<- will be passed by value along with the structure
	int myInt;
};
```

Example declaration:
- `{c}struct myStruct myRecord = {"theString", 'c'};`
	- can be shortened. See [[#^typedef|typedef]]

Shorthand declaration:
```c
struct myStruct{
	char myString[20];
	int myInt;
} record1, record2;
```

- **Through functions:**
	- you have to write "struct" before it (unless [[#^typedef]])
	- Ex: `{c}sizeof(struct myStruct);`

##### Union

The syntax is similar to that of a [[#Struct]], but its purpose is very different.
All the different data types contained inside are mutually exclusive.
An union variable can be **one** of the types contained in the union.
The size in memory is equal to the biggest of all the types inside the union, so that it's just enough to contain anything.

#### Pointers

- 8 bytes long
- **Declaration**
	- `{c}typename* myPointer;`
	- `{c}int* pointerToInt;`
	- `{c}struct structName* pointerToStruct;`
- initialize with [[#^null|NULL]]
- don't get the declaration syntax messed up:
	- `{c}int* x, *y, z;`
	- `{c}x`: pointer
	- `{c}y`: pointer
	- `{c}z`: NOT a pointer, just an integer
- **Example usage:**
	```c
	int a=10, *x;
	x = &a; //(let's say a's address is 0xFFFFFF)
	```
	- `{c}a == 10`
	- `{c}x == 0xFFFFFF` 
	- `{c}&a == 0xFFFFFF`
	- `{c}*x == 10`

- **Pointer to struct (Arrow Syntax)** ^arrow-syntax
	- basically dot notation for structured types that are pointed
	```c
	myStruct myRecord = {'c'}, *myPointer = &myRecord;
	printf("%d", myPointerToStruct->charField); //prints 'c'
	```
	
- **Pointer to function**
	- necessary if you want to pass a function as a parameter to another function
	- type of pointer must coincide with return type of function
	- parameters must coincide
	- syntax is weird
	- ~~syntax is wack~~
	```c
	int (*p)();
	p = myFunction;
	
	//call myFunction through its pointer:
	(*p)(a,b);
	
	//alternative declaration
	void (*fun_ptr)(int) = &myFn;
	```
			
#### Qualifiers

These are keywords you add in a variable declaration _before_ specifying its type.

If you use multiple qualifiers on a variable, there's no particular order in which you should write them.
`{c}unsigned long int` is as valid as `{c}long unsigned int`. The important part is that `{c}int` goes last.

- `{c}const` ^const
	- Variables of this type are read only. Assignations to these will throw errors.
	- You can make a formal parameter `{c}const`, it'll only be read-only exclusively within the function.
- `{c}signed`
	- normally implicit
	- works on every integer type
- `{c}unsigned` ^unsigned
	- no negative numbers -> double the size
	- can't do it on floating-point types (inherently signed)
	- works on every integer type
- `{c}short` ^short
	- `{c}int`
- `{c}long` ^long
	- `{c}int`
		- even twice
	- `{c}double`
		- once max
- **EXAMPLE:**
	- `{c}unsigned long long int a=0;`
	- `{c}signed char;`
		- the standard doesn't say anything about whether default [[#^char]] is signed or not
		- the standard guarantees there are 3 distinct types: `{c}signed char`, `{c}char` and `{c}unsigned char`
		- ~~totally pointless. idk why im even telling you~~

---

#### Special types

- `{c}void`
	- 0 bytes long
	- placeholder type for functions and pointers
- `{c}_Bool` _C99+_
	- Boolean type. Not really meant to be used. See [[#^4afc9b]]
	- minimum 1 byte

---

### Literals

Literlas are a syntax for constant values appearing directly in the source code.

#### Integer Literal

Literals assignable to [[#^int|integer]] variables.
- `{c}3`
	- Decimal notation. Pretty straight forward.
	- `{c}int number = 3;`
- `{c}010 == 8`
	- [[Octal]] notation is written through a **leading zero** (zero before the number)
	  To note: `{c}08 == 8`: it turns back to [[decimal]] because the octal notation has been broken.
	  Any symbol unsupported in octal makes it turn back to a decimal.
- `{c}0xF1 == 0XF1 == 16`
	- Hexadecimal notation
- `{c}0b1010 == 0B1010 == 10` _C99+_
	- Binary notation

---

#### Character Literal

[[#Literals]] for characters. They translate to the [[ascii]] code of the character.
`{c}char character = 'a';`

- `{c}'A' == 65`
- `{c}'Z' == 90`
- `{c}'a' == 97`
- `{c}'z' == 122`

---

#### Array Literals

Literals assignable to [[#array|arrays]]. 
They are only assignable **upon declaration**.
==Subsequent assignations won't work==. They'll throw errors.
- `{c}{}`
	- Initializes no elements and it doesn't give out information about the size.
	  It is however valid.
- `{c}{5, 2, 64, 8}`
	- Initializes these first four elements, which will be places in the first four indexes.

**Declaration examples:**
- `{c}int array[4] = {5, 2, 64, 8}`
	- The size of the array is explicitly set to four,
- `{c}int array[] = {5, 2, 64, 8};` ^implicit-array-size
  In this case, the size is implicit. Four integers **will** be allocated.
  This is an implicit way of declaring `{c}int array[4];`.
  
---

#### String Literal

[[#Literals|Literal]] for [[#string|strings]].
`{c}"This is a string literal."`, `{c}{"I think this is equally as valid."}`
Notice the double quotes. As opposed to the [[#character literal]]'s single quotes.

It's only usable in specific scenarios:
- can assign it to an array **exclusively upon declaration**:
  `{c}char string[] = "my string literal"`
- can pass it to a function

---

#### Compound Literal

Compound [[#literals]] can be described as nameless variables.
- `{c}(int){0}` is a nameless integer variable
- `{c}&(int){0}` the address of a newly declared [[#^int]] variable

##### Array Compound Literal

[[#Compound Literal]] for [[#array|arrays]].
- `{c}(int[]){}`
	- Nameless array without a size and with no elements.
	  I think this should be an error, or at least give out a compiler warning, but it doesn't.
- `{c}(int[10]){}`
	- This one allocates `{c}10` elements, so it's meaningful.
- `{c}(int[2]){84, 100}`
	- Allocates two explicitly and then initializes them.
- `{c}(int[]){5, 4, 11}`
	- Implicitly allocates three elements, other than initializing them.
	  Analogous to [[#^implicit-array-size]].
- `{c}(int[10]){0}`
	- This is supposed to initialize the array, but I'm not sure it works.
	  Normally, `{c}(int[10]){7}` assigns `{c}7` to the first index, and not to everything else.
	  The claim of `{c}(int[10]){0}` is that it assigns `{c}0` to _every_ element.
	  I'm not sure this claim is true.

---

### Preprocessor directives

- `{c}#include <libhd.h>` ^include-standard-header
	- include library header from the standard library
	- the preprocessor literally picks the text from the header file you're referencing and it slaps it in your code, replacing this `{c} #include` statement
- `{c}#include "your_header.h"` ^include-file
	- include text from any file in your code (mostly makes sense with headers)
	- please no spaces. It probably works but just don't
- `{c}#define MY_MACRO 3` ^macros
	- define macros
	- they're kinda like constants but inlined because text replacement
	- no type check
- `{c}#if MY_MACRO` ^conditional-compilation
	- This macro instruction gets referred to as **conditional compilation**.
	  This is because if `MY_MACRO` doesn't exist, the following code until `{c}#endif` gets cut.
	  Hence, that code doesn't make it to the [[#compilation]] phase.
- `{c}#endif`
- `{c}#define ... __VA_ARGS__` ^variadic-macro
	- this is called the **variadic macro**
	- _C99+_
	- `{c}...`
		- Variadic macro/ellipsis
		- represents a variable number of arguments
	- `{c}__VA_ARGS__`
		- in your own macro declarations, `{c}...` gets replaced with this
		- `{c}#define PRINT(format, ...) printf(format, __VA_ARGS__)`
		
### Code flow instructions

- **Switch:** ^switch
	```c
	switch(selector){
		case 1:
			/* instruction */;
			break;
			
		case 2: //and so on
		default: /*not mandatory*/;
	}
	```
- **Typecasting** ^typecasting
	- `{c}(int)charVariable`
		- changes the type
		- in this example a char gets read as an integer according to [[ASCII]]
		- can be done with lots of types
		- it must make sense, like a number type to another number type or shit like that
		- don't be a dumbass with this
- **Operators** (_only a few notable ones_)
	- **Any variable**
		- `{c}sizeof(variable)`
			- returns the size in bytes
			- You can pass
				- [[#^primitive-types]]
				- [[#^arrays]]
				- [[#^structs]]
				- even [[#^user-defined]] types
			- [[#^dynamically-allocated-arrays]] are of type [[#^pointers|pointer]] so their size will always be `{c}8`
			- not quite a function
			- compile-time unary operator
				- it's a language construct
				- no libraries to include
				- ~~no chicanery~~
	- **Scalars**
		- **Increment/decrement:**
			- these can't be chained
			- :(
			- `{c}n++`
				- _suffix increment_
				- decrements and returns how the value of `{c}n` was BEFORE the decrement
				- possible implementation:
					```cpp
					int suffix_increment(int n){
						n = n+1;
						return n-1;
					}
					```
			- `{c}++n`
				- _prefix increment_
				- decrements and returns the new value
					```cpp
					int prefix_increment(int n){
						n = n+1;
						return n;
					}
					```
			- `{c}n--`
				- _suffix decrement_
				- decrements and returns how the value of `{c}n` was BEFORE the decrement
				- possible implementation:
					```cpp
					int suffix_decrement(int n){
						n = n-1;
						return n+1;
					}
					```
			- `{c}--n`
				- _prefix decrement_
				- decrements and returns the new value
					```cpp
					int prefix_decrement(int n){
						n = n-1;
						return n;
					}
					```
	- **Char**
		- `{c}'0'<'A'`
			- `{c}0 < 65`
			- [[ASCII]]
		- `{c}'A'<'a'`
			- `{c}65 < 97`
			- [[ASCII]]

---

## Platform-specific code

- **[[POSIX]]:**
	- `{c}errno.h`
		- **Macros:** ^posix-errors
			- [List](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/errno.h.html)
			- `{c}ENOMEM == 12`
	- `{c}string.h`
		- `{c}strerror(int errorCode)`
			- **Error codes:** ^posix-error-codes
				- `{c}myInteger<0 || myInteger>42? "Unknown error" : switchFunc(myInteger);`
				- `{c}0`: `{c}"No error"`
				- `{c}1`: `{c}"Operation not permitted"`
				- `{c}2`: `{c}"No such file or directory"`
				- `{c}3`: `{c}"No such process"`
				- `{c}4`: `{c}"Interrupted function call"`
				- `{c}5`: `{c}"Input/output error"`
				- `{c}6`: `{c}"No such device or address"`
				- `{c}7`: `{c}"Arg list too long"`
				- `{c}8`: `{c}"Exec format error"`
				- `{c}9`: `{c}"Bad file descriptor"`
				- `{c}10`: `{c}"No child processes"`
				- `{c}11`: `{c}"Resource temporarily unavailable"`
				- `{c}12`: `{c}"Not enough space"`
				- `{c}13`: `{c}"Permission denied"`
				- `{c}14`: `{c}"Bad address"`
				- `{c}15`: `{c}"Unknown error"`
				- `{c}16`: `{c}"Resource device"`
				- `{c}17`: `{c}"File exists"`
				- `{c}18`: `{c}"Improper link"`
				- `{c}19`: `{c}"No such device"`
				- `{c}20`: `{c}"Not a directory"`
				- `{c}21`: `{c}"Is a directory"`
				- `{c}22`: `{c}"Invalid argument"`
				- `{c}23`: `{c}"Too many open files in system"`
				- `{c}24`: `{c}"Too many open files"`
				- `{c}25`: `{c}"Inappropriate I/O control operation"`
				- `{c}26`: `{c}"Unknown error"`
				- `{c}27`: `{c}"File too large"`
				- `{c}28`: `{c}"No space left on device"`
				- `{c}29`: `{c}"Invalid seek"`
				- `{c}30`: `{c}"Read-only file system"`
				- `{c}31`: `{c}"Too many links"`
				- `{c}32`: `{c}"Broken pipe"`
				- `{c}33`: `{c}"Domain error"`
				- `{c}34`: `{c}"Result too large"`
				- `{c}35`: `{c}"Unknown error"`
				- `{c}36`: `{c}"Resource deadlock avoided"`
				- `{c}37`: `{c}"Unknown error"`
				- `{c}38`: `{c}"Filename too long"`
				- `{c}39`: `{c}"No locks available"`
				- `{c}40`: `{c}"Function not implemented"`
				- `{c}41`: `{c}"Directory not empty"`
				- `{c}42`: `{c}"Illegal byte sequence"`
- **[[Windows]] API:**
	- `{c}windows.h`
		- **Implementation is in either of these files:**
			- `kernel32.dll`
			- `user32.dll`
			- `gdi32.dll`
		- `{c}GetModuleFileName(NULL, stringVar, stringSize);`
			- rewrites `{c}stringVar` to the full path of the current executable being run
			- returns length of string copied to emptyString
			- 0 if it fails
				- `{c}ERROR_INSUFFICIENT_BUFFER` gets set as last error
				- `{c}GetLastError` gives more info
- **[[MinGW]]:**
	- uses [[#^msvcrt|MSVCRT]] on [[MinGW#^mingw-w64|MinGW-w64]]
	- `{c}__MINGW32__`
		- it's a [[#^macros|macro]]
		- if this macro is defined you're using mingw compilers
- **[[GCC]]:**
	- `{c}__attribute__((section("CustomSection"))) int myArray[] = {1, 2, 3, 4};`
		- set `{c}myArray` to a new section in the binary file called `{c}"CustomSection"`
		- after compiling this code, using [[nm.exe]] on the resulting executable will display a new `{c}"CustomSection"` section
- **[[Visual Studio]]:**
	- uses [[#^msvcrt|MSVCRT]]
	- uses [[Visual C++]]
	- `{c}#define _CRT_SECURE_NO_WARNINGS`
		- stop visual studio from crying and pissing
		- no seriously though, it stops VS from throwing warnings when you don't use microsoft's secure versions of functions
		- **WHY:**
			- they would have changed `{c}scanf`'s implementation directly, but [[#Trivia|the specification]] mandates the signatures.
			- secure functions exist because they have slightly different signatures
			- microsoft software has to abide by the [[SDL]]: their company policy goes against the C Standard.
			- to abide by the SDL you have to use the secure versions
				- ~~(no one gives a fuck. Don't use the secure versions :thumbsup:)~~
	- `{c}scanf_s();` ^scanf-s
		- secure version of [[#^scanf|scanf]]
		- additional parameter: it wants the size of the buffer

---

## Libraries

- **MSVCRT** ^msvcrt
	- [[Visual Studio]]'s implementation of the standard library
	- `{c}__MSVCRT__`
		- If this macro exists, you're using this library.
		- Check through [[#^conditional-compilation]]
	- `{c}stdlib.h`
		- This library adds additional shit to this standard header:
		- `{c}size_t _msize(void*);` ^msize
			- Returns allocated memory in bytes.
			- The pointer you pass must be allocated and it must be the first address of that allocation.
			  Program explodes otherwise. I mean it.
		- `{c}size_t _aligned_msize(void*);`
			- Similar to [[#^msize]] as far as I know.
			  It requires additional arguments I haven't documented.
- **[[GCC]]:** ^gcc
	- **libc** ^libc
		- standard library.
	- **libm** ^libm
		- math library
		- has [[#^math-header|math.h]]
	- **glibc** ^glibc
		- [[GNU]] C Library
		- standard library + **unique stuff (listed here)**
		- `{c}__GLIBC__`
			- if this [[#^macros|macro]] is defined, you're using glibc
			- check through [[#^conditional-compilation]]
		- `{c}malloc.h`
			- header seems deprecated
			- `{c}size_t malloc_usable_size(void*)`
				- pass any pointer, it tells you the usable size in bytes
- **GMP** (**[[GNU]] Multiple Precision Arithmetic Library**)
	- arbitrary precision for integer and floating point types (even very big)
- **MPFR** (**Multiple Precision Floating-Point Reliable Library**)
	- arbitrary precision for integer and floating point types (even very big)

---

## Trivia

- **Creation:**
	- C was made by **Dennis Ritchie** in the early **'70s** at **Bell Labs**
	- initially made to develop [[Unix]]
	- before C, they were making Unix with [[B]] but they needed a more powerful language
- **History of standardization:**
	- [[ANSI]] formed the **X3J11** committee to standardize C (just in the USA) ^ANSI
	- the **ANSI X3.159-1989** standard was approved and published in 1989
	- it defined once and for all:
		- the language's syntax
		- the standard library headers
		- the content of these headers
	- all C compilers must abide
	- the next year [[ISO]] and [[IEC]] (international shits) adopted this standard, known as **ISO/IEC 9899:1990** or the **C Standard**
	- the latest C Standard is like **ISO/IEC 9899:2018** or something