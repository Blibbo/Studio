---
tags:
  - strongly-typed
  - programming
  - language
  - standard
aliases:
  - CPP
---
---

### About C++

- source files have `.cpp` extension

---

### Syntax

- **VARIABLES**
	- **Initializer lists**
		- _C++11+_
		- allows you to "assign" to constant variables?
		- can do this cool "range based" `{cpp}for` loop
			- don't bother with indexes, just use the value. No off-by-one errors
		- `{cpp}for(const int v : {-129, -128, -1, 0, 42, 127, 128, 255, 256}){}`
- **CLASSES**
	- **PROPERTIES**
		- contiguous in memory. That's the case for structs as well.
			- **EXAMPLE:**
				- `{cpp}T x, y, z;`
				- `{cpp}(&x)[1] == y`. That's true.
	- **METHODS**
		- **CONST METHOD**
			- `{cpp}int myMethod() const {}`
			- the state of the object won't change through the function
		- **METHOD CHAINING**
			- `{cpp}return` type of your method must be a reference type to its own class
			- `{cpp}return` value of your method must be the own object (content of "`{cpp}this`" pointer)
			```cpp
			MyClass& chainableMethod(){
				return *this;
			}
			```
			- then `{cpp}obj.chainableMethod().chainableMethod().chainableMethod()`
		- **CONSTRUCTOR**
			- **MEMBER INITIALIZER LISTS**
				- **USAGE:**
					- constructor for a class called Example with x and y as int properties
					- `{cpp}Example(int a, int b) : x(a), y(b) {}`
				- **NOTES:**
					- the member initializer syntax initializes the members (wow)
					- initializing follows order of declaration INSIDE THE CLASS
					- order in which you write them INSIDE THE INITIALIZER is arbitrary and it does not matter
					- only way to initialize constant members
					- good practice regardless (for non constant members too)
	- **IN-CLASS MEMBER INITIALIZATION**
		- **USAGE:**
			- declare and initialize a property directly in the class
			- `{cpp}int myProperty = 3;`
				- from inside a class. Not in a method
		- **NOTES:**
			- before the C++11 standard, you could only use constants (instead of the integer literal "3" used here)
			- mind blowing line of code, I know
			- you're not entitled to this syntax, be grateful
	- **FRIEND FUNCTIONS**
		- **DECLARATION:**
			- inside the class add this signature
			- `{cpp}friend void myFriend(MyClass&);`
		- **DEFINITION:**
			- outside the class
			- `{cpp}void myFriend(MyClass& obj){}`
		- **NOTES:**
			- they're not members of the class
			- they can access private and protected stuff all the same
	- **STATIC PROPERTIES**
		- inside a class
		- `{cpp}static int a = 3;`
		- `{cpp}static void StaticMethod(){}`
		- **NOTES:**
			- it's a member.
			- every object shares it
			- this method can't access
	- **NESTED TYPES**
		- **DECLARATION**
			```cpp
			class MyClass{
			public:
				typedef std::string str;
			}
			```
		- **USAGE**
			- outside the class
			- `{cpp}MyClass::str myString;`
			- inside the class
			- `{cpp}str myProperty;`
		- **NOTES:**
			- you'll always need to use the CRO `{cpp}::` if you use this type outside of the class
			- you can define a type inside a class through:
				- `{cpp}typedef`
				- `{cpp}struct`
				- `{cpp}class` (straight up another class)
	- **CONTEXT RESOLUTION OPERATOR (CRO ^^^)**
		- **NOTES:**
			- it's this symbol: `{cpp}::`
			- used mainly to:
				- define methods outside the class (interface vs implementation)
				- access static members
				- access nested types
		- **EXAMPLE:**
			- **SIGNATURE** (`.hpp` file)
				```cpp
				class MyClass{
				private:
					void myMethod(int);
				}
				```
			- **IMPLEMENTATION** (`.cpp` file)
				```cpp
				#include "theHppFile.hpp"
				
				MyClass::myMethod(){/*implementation here*/}
				```
- **OPERATORS**
	- **ARITY (number of operands)**
		- **UNARY**
			- `{cpp}!a`
				- logical NOT
			- `{cpp}~a`
				- bitwise NOT
			- `{cpp}&a`
				- address
		- **BINARY**
			- `{cpp}a&b`
				- bitwise AND
			- `{cpp}a|b`
				- bitwise OR
			- `{cpp}a^b`
				- bitwise XOR
			- `{cpp}a<<b`
				- left shift by '`{cpp}b`' positions
				- adds '`{cpp}b`' zeros to the bits
				- does $a \times 2^b$
				- undefined behavior on overflow
			- `{cpp}a>>b`
				- right shift
				- basically divides 'a' by 2^b
				- undefined behavior on overflow
			- `{cpp}a*b`
				- multiplication
				- VERY FAST
			- `{cpp}a/b`
				- division
				- VERY SLOW
				- If dividing a number by many others,
					1. Save the value of 1/thatNumber
					2. Multiply your saved 1/thatNumber by all the others
		- **TERNARY**
			- `{cpp}a? b:c`
				- `{cpp}a?` then `{cpp}b`, else `{cpp}c`
				- It's a small "`{cpp}if`" in the shape of an inline operator
	- **OPERATOR OVERLOADING**
		- **NOTES:**
			- they're just functions which happen to be called "`{cpp}operator+`" where '`{cpp}+`' gets replaced with the specific operator you're overloading.
			- **Examples:** `{cpp}operator-` `{cpp}operator&&` `{cpp}operator%` `{cpp}operator[]` etc
			- the parameters these function take are the operands, in the order in which they appear
			- **LIMITATIONS AND QUIRKS:**
				- can't create new operators or change the arity of existing ones
				- overloading an operand only works in the context of user defined types (classes, structs and enums)
				- some operators can't be overloaded (`{cpp}.`, `{cpp}.*`)
				- unary operators go before/after based on their normal usage (`{cpp}+a`, `{cpp}&a` etc)
				- prefix and postfix increment/decrement would be hard to differentiate, the technique used is adding a dummy int parameter in the case of post increment
				- if you return a reference, `{cpp}[]` has an ulterior overload based on whether the object is const qualified
					- **Signatures:**
						```cpp
						const int& operator [] (int i) const {
							return yourIntAttribute[i];
						}
						```
					- `{cpp}int operator [] (int i) {}`
				- you can overload `{cpp}()`. The constructor doesn't count though, it's still the constructor. It's pretty intuitive stuff if you think about it. just common sense.
		- **OPERATOR OVERLOAD ON MEMBER FUNCTIONS**
			- **BINARY OVERLOAD EXAMPLE w/'+'**
				- `{cpp}obj1 + obj2 = obj3`
				- where `{cpp}obj3.value == obj1.value + obj2.value`
				```cpp
				MyClass operator+(const MyClass& operand) const {
					MyClass result;
					result.value = value + operand.value;
					return result;
				}
				```
			- **UNARY EXAMPLE**
				- obj changes the sign of the private property "value"
				```cpp
				MyClass operator-() const {
					MyClass result;
					result.value = value * -1
					return result;
				}
				```
		- **OPERATOR OVERLOAD ON NON MEMBER FUNCTIONS**
			```cpp
			MyClass operator+(const MyClass& operand) const {
				MyClass result;
				result.value = +operand.value
				return result;
			}
			```
		- **TYPE CONVERSION OVERLOAD**
			- **NOTES:**
				- specifies the behavior of type casting on that object
				- this function MUST be a member of the class
				- this has special syntax
				- in the example below, we make it so (int)obj returns the object's 'value' attribute
			```cpp
			operator int() const {
				return value;
			}
			```
		- **PREFIX AND POSTFIX INCREMENT**
			- **PREFIX**
				- **MEMBER FN**
					- `{cpp}MyClass operator++();`
						- `{cpp}--` for decrement
				- **NON MEMBER FN**
					- `{cpp}MyClass operator++(MyClass myObj);`
			- **POSTFIX**
				- **MEMBER FN**
					- `{cpp}MyClass operator++(int);`
				- **NON MEMBER FN**
					- `{cpp}MyClass operator++(MyClass myObj, int);`
					
		- **OVERLOADING STREAM INSERTION AND EXTRACTION**
			- in the cout<< and cin>> syntax, << and >> are operator overloads themselves
			- the class << and >> are overloaded in is iostream's std::ostream
			- put the following in your class:
			```cpp
			friend std::ostream& operator<<(std::ostream& os, const MyClass& obj) {
				return os << "MyClass object with value: " << obj.value;
			}
			```
- **TEMPLATING**
	- **FUNCTIONS**
		- **DECLARATION**
			```cpp
			template <typename T1, T2> //T1 and T2 are types
			T1 print(T1 a, T2 b) {
				cout<<a<<b;
				return a;
			}
			```
		- **USAGE**
			- `{cpp}print(myInt1, myFloat2);` //returns myInt1 as well as printing both
	- **CLASSES**
		```cpp
		template <class T>
		class MyTemplateClass {
		public:
			T member;

			// Additional members and methods can be added here
		};
		```
		- **NOTES**
			- the name of a template class is `{cpp}MyTemplateClass<T>` outside the context of definition
			- declare `{cpp}T` first as "`{cpp}template <typename T>`" though
			- **Example:** constructor implementation in a separate file
				```cpp
				template <typename T>
				MyTemplateClass<T>::MyTemplateClass(){}
				```
		- **MATCHING UTILITY TEMPLATE FUNCTION**
			```cpp
			template <typename T>
			void myUtility(const Vec3<T> &templateParameter);
			```
			- this function signature is for a template object that is
				- read by reference: because copying the whole thing is a bad fucking idea
				- not meant to be modified: because a good object has getters and setters
					
- **TYPEDEF**
	- **NOTES:**
		- allows you to create aliases for types
		- useful if there's a really long type that's boring to write
		
	- **EXAMPLES:**
		- a specific class out of a template of classes
		- `{cpp}typedef Vec3<float> Vec3f;`

		- `{cpp}typedef std::string str;`

- **FUNCTIONS**
	- **INLINE**
		- EXAMPLE SIGNATURE:
			- `{cpp}inline void myInlineFunction();`
		
		- **NOTES:**
			- inlining might NOT happen
			- compilers might have their own rules, "inline" is just a hint
			- same way as making a thread is a hint to the SO to use another core
		
		- **WHAT THEY DO (if inlining happens):**
			- the body of an i.f. substitutes the call on each call.
			- this IN NO WAY changes the basic scoping rules of variables
			- skip overhead from call stack
			- increase code size -> increase machine code size -> makes executables heavier

- **POINTERS**
	- **DECLARATION**
		```cpp
		int* myPointerToInt; //pointer to integers type
		myPointerToInt = &myIntVariable
		```
		- ALTERNATIVE DECLARATIONS
			- `{cpp}int a=0, *b = &a;`
	- **NOTES**
		- each pointer declaration needs its own *
		- saying `{cpp}int* b, a` only makes `{cpp}b` the pointer (while `{cpp}a` is an integer).
		- `{cpp}int* b;` and `{cpp}int *b;` are the same
	- **DEREFERENCING**
		- `{cpp}*myGenericPointer` -> this expression evaluates to just the pointed variable
			- it's literally the same as just mentioning the actual variable
		- `{cpp}myGenericPointer` -> this is the address of the beginning of the variable
			- (the content of the pointer)
	- **ARROW SYNTAX**
		```cpp
		MyClass myObj, *myPointToObj = &myObj; //valid for structs too
		
		myPointToObj->myMethod(); //"->" is the dot notation for referenced stuff
		(*myPointToObj).myMethod(); //same as above.
		```
	- **POINTER TO METHOD**
		- worst syntax ever
		- pointers to normal functions exist in c++ the same way they do in C (check c doc)
		```cpp
		MyClass obj;
		void (MyClass::*funcPointer)(int) = &MyClass::memberFunction;
		(obj.*funcPointer)(42);
		```
		- it gets worse
		- say you wanted to call the method from a pointer to obj
		```cpp
		MyClass obj, *pToObj = &obj;
		void (MyClass::*funcPointer)(int) = &MyClass::memberFunction;
		(pToObj->*funcPointer)(42);
		```
		- jesus is crying
- **REFERENCES**
	- **NOTES**
		- they're just aliases
		- MUST be assigned immediately upon declaration
		- first assignment behaves differently:
			- first assignment: reference something
			- subsequent assignments: assign to the referenced thing
		- don't get reference types (int &a) mixed up with variable addresses (&a):
			- outside declarations, &a means "the address where a is stored"
			- ^^^such "address" is the kind of value POINTERS want. It's another thing entirely.
	- **DECLARATION**
		```cpp
		int a, &b = a; //b is a reference to a
		b = 10; //same as saying a = 10
		```
	- **USE IN FUNCTIONS**
		```cpp
		void foo(int& a);
		(in the main) foo(b);
		```
		- **TO NOTE:**
			- parameters work like this (it's a DECLARATION):
				- `{cpp}type formalParameter = actualParameter`. This is literally what happens.
			- what happens in the snippet above is:
				`{cpp}int& a = b;`
			- the parameter is thus passed "by reference"
			- this is ALWAYS convenient for read only parameters as it saves memory
			- "`{cpp}const string& readOnlyString`" is an excellent read only parameter.
- **NAMESPACES**
	- **DECLARATION**
		```cpp
		namespace myNameSpace {
			int a = 42;
		}
		```
	- **ALIASES**
		```cpp
		namespace newName = myNameSpace
		
		cout<<newName::a; //prints 42
		```
	- **NOTES:**
		- can't declare a namespace inside a function
		- can a declare alias anywhere
		- can declare a namespace inside a namespace
		- the namespace is not unique, it's just a scoping context
		- you can write "namespace newSpace {}" several times in your code
		- multiple files can access the same namespace and add their shit to it
		- yes you can make up bullshit functions under the std:: name
	- **USING**
		- using a single element -> namespace scoping context resolution (::)
		- `{cpp}int b = myNameSpace::a;`
		- bringing that single name into this scope
		- `{cpp}using myNameSpace::myVariableOrFunction;`
		- bringing multiple elements into scope
		- `{cpp}using myNameSpace::myName1, myName2;`
		- bringing all names in the namespace into this scope
		- `{cpp}using namespace myNameSpace;`
		- **NOTES:**
			- although in some cases classes can use context resolution (::) too, the "using" statement only works with namespaces and not with classes.
			- can't use "using" with a name that represents a namespace alias
			- that example is too specific, let me show you what it means:
				```cpp
				namespace myNamespace{ namespace ns = myNamespace }
				using myNamespace::ns
					//THIS will throw an error
				```
			- why would you declare an alias inside the namespace itself? that would mean the namespace recognizes its own name is too long and you might prefer another name. Then why don't you fucking call it the shorter name?
			- you have to be retarded to find yourself in this predicament
- **PREPROCESSOR DIRECTIVES**
	- **NOTES**
		- they ALL just manipulate text for the compiler to compile later.
	- `{cpp}#include "myHeader.hpp"`
		- can include text from ANY kind of file verbatim.
		- file name is not case sensitive, `{cpp}"myheadeR.hpp"` would have worked too
		- used mostly to add text from header files
		- `{cpp}#include "myFile"` tells the compiler to look in the local directory FIRST and then in
			the library headers
		- `{cpp}#include <myLibHeader>` tells the compiler to look in the lib headers from the get go
		- If it fucks up your code it might be up to:
			- the file's encoding
			- whether it makes sense for the included text to be there in your code.
		- If you try to add in .cpp files this way it's extremely dumb because:
			- each cpp file is the starting point of a translation unit
			- you brought a cpp file in this translation unit
			- that file will also get their own translation unit anyways
			- you duplicated the .cpp file you included
			- code is fucked up. you suck. kill yourself
	- `{cpp}#define MY_MACRO 3`
		- this is called a "preprocessor macro"
		- a macro is a piece of code that has been given a name
		- it's just text replacement before compilation
		- **MACRO FUNCTIONS:**
			- `{cpp}#define SQUARE(x) ((x) * (x))`
			- `{cpp}#define CONCAT(x, y) x ## y`
			- `{cpp}#define STRINGIFY(x) #x`
			- bad fucking idea
			- no debugging or typecheck
			- works, though
			- `{cpp}#` and `{cpp}##` aren't c++ operators, they're just used in this pre processing context and they do just what the function name says up there
	- `{cpp}#if MY_MACRO`
		- executes if MY_MACRO is truthy
		- more accurate to say it cuts out the block of text between this and endif if it's false
		- pre processors don't do boolean algebra though so no clue what true and false mean here
	- `{cpp}#endif`
		- finishes the if
	- **GUARDS**
		- **OLD GUARD**
			```cpp
			#ifndef MY_GUARD
			#define MY_GUARD
			
			//your code here
			
			#endif
			```
			- **NOTES:**
				- you can choose where to end the guard within the file through the endif
				- people don't do that^, the whole header is usually guarded
				- MY_GUARD is a macro, hence it must be completely unique in this translation unit
		- **MODERN GUARD**
			- `{cpp}#pragma once`
			- **NOTES:**
				- you don't have to come up with a unique name for the macro
				- almost completely supported, but there might be some compilers that don't
				- just use this please?
- **TYPE CASTING**
	- **C STYLE**
		- `{cpp}int i = (int)myFloat;`
			- truncates the part after the comma
		- `{cpp}char c = (char)i`
			- if i is 65 then c is 'A'
	- **MODERN C++**
		- `{cpp}static_cast<int>(myFloat);`
			- same thing as above. They're identical tbh, it's just a syntax thing	
- **GOTO**
	- assembly's jmp
	```cpp
	start:
		std::cout<<"a";
		goto start; //infinite loop
	```

---
			
### Standard Library Headers (#include <your_standard_library>)

- **NOTES**
	- transition of standard libraries from C to C++:
		- C: yourlibrary.h
		- C++: cyourlibrary
	- C++ wanted to lose the .h because it feels more "official-y"
	- C++ compilers accept ANSI C libraries too (.h)
	- cmath, cstring and allat are equivalent to their respective C libraries
	- C++ has newer libraries that are entirely different.
		- **Example:**
			- `{cpp}<cstring>` (c-style string library, functions like `{cpp}strlen()` are all over the place)
			- `{cpp}<string>` (contains the `{cpp}std::string` class, which is all you need in c++)
- `{cpp}iostream`
	- STD NAMESPACE (`{cpp}std::`)
		- `{cpp}cin>>myVar;`
			- read myVar from console
		- `{cpp}cout<<myVar1<<"string literal";`
			- write to console
		- `{cpp}endl;`
			- NOT an alias for '\n'
			- flushes the buffer, takes more time
			- just use '\n'
- `{cpp}cmath`
	- `{cpp}#define _USE_MATH_DEFINES`
		- this line makes cmath define a bunch of macros with more maths stuff
		- must be added BEFORE including cmath
		- BAD PRACTICE:
			- Defines are a C thing, there are new libraries that use namespaces
			- including C's math.h again after defining "use math defines" causes it to update the header to add M_PI and stuff, correctly.
			- cmath doesn't do this. Include cmath, define use math defines, include cmath again, use `{cpp}m_pi`: error. You already defined cmath without defines.
			- why would you define cmath before? Well, `{cpp}<iostream>` includes cmath, for example.
			- if you're in a header file and your main file uses iostream, you're fucked
			- hence, this is just unsupported behavior and bad practice.
			- Still works if you're careful though.
		- here's the macros it adds:
			https://www.quantstart.com/articles/Mathematical-Constants-in-C/
			- `{cpp}M_PI`
				- it's pi
			- `{cpp}M_E`
				- Nepier/Euler's number
	- `{cpp}sqrt(yourNumber);`
		- square root
	- `{cpp}acos(cosValue);`
		- gives you the angle (range is 0, π)
	- `{cpp}atan2(x, y);`
		- returns the angle of sin/cos for the angle the point xy makes 
- `{cpp}algorithm`
	- `{cpp}std::`
		- `{cpp}clamp(yourNumber, min, max);`
			- returns yourNumber as a number within the specified range. Floors to min, maxes to max
			- only on C++17 and above
- `{cpp}iomanip`
	- `{cpp}setw()`
		- look it up please
- `{cpp}numbers`
	- `{cpp}std::`
		- `{cpp}numbers::`
			- `{cpp}pi`
				- it's pi
- `{cpp}cstdint`
	- holds fixed length types I think
	- **TYPES**
		- `{cpp}uint8_t`
			- [0, 255] smallest possible integer, 8 bits. Unsigned
		- `{cpp}int8_t`
			- [-128, 127] signed integer, 8 bits

---

### Libraries

- **[[GCC]]:**
	- **libstdc++** ^libstdcpp
		- Standard C++ Library
- **STL**
	- Standard Template Library
	- contains template classes like vectors and stuff

---

### About making programs

- **TRANSLATION UNITS**
	- they're the output of the preprocessing stage
	- they're also the input of the compilation phase
	- after compiling, a TU becomes a .obj (windows) or .o (unix) file
	- IT'S OKAY if all your code is in the same translation unit.
		- It's ADVISED unless you're making libraries or absolutely GARGANTUAN projects.
		- You don't need to separate the interface from the implementation. (unless you do)
		- It makes your developing process more convoluted, especially if you have many tiny methods.
			- That's because:
				- you have to write signatures twice and update them twice
				- one of the two signatures has MyClass:: before the method's name
				- if it's a template class the syntax PER EACH METHOD becomes
					```cpp
					template <typename T>
					MyTemplateClass<T>::myMethod(){}
					```
				- you have to write this shit AND ALSO keep track of the signature in the header files.
				- it's readable. It works for libraries. It doesn't work for you. Don't do it. Not right away at least. Just implement classes in the .hpp directly.
- **LIBRARIES**
	- **NOTES:**
		- they're precompiled objects mashed together in one file
	- **STATIC**
		- .lib on windows, .a on unix
		- the linker extracts only the necessary object files into your executable
		- INTO your executable
		- as in, it's bundled into your .exe
		- got it?
		- ~~asshole.~~
	- **DYNAMIC**
		- .dll on windows, .so on unix
		- your .exe contains references to functions or other code in the library
		- the library is not contained in your executable
		- the library is somewhere else on your pc
		- when you run the program, the SO loads this file too.
		- change the file once, basically change it for every .exe that uses it.
		- no need to recompile programs who use this if you need to update it
	- **LINKING PHASE**
		- the following:
			- obj files
			- static libraries
			- dynamic libraries
		- will be linked together.
		- In a linker tool, you'd specify the .obj files individually
		- The result will be an executable that has:
			- all the obj files
			- the required definitions from the static libraries
			- only the PATHS to the dlls (remember how they're dynamic and get loaded at runtime)
		- embedded into it.
	- **MORE ABOUT DYNAMIC LIBRARIES:**
		- Typically, if you're selling the executable, the dlls will be looked for in a set of standard directories, it's up to the user to have those at the program's disposal.
		- handy because people can update them individually and they're separate from your .exe
		- sucky because people must have a separate thing on their machine for your program to run.
- **EXECUTING**
	- **ARGC AND ARGV**
		- they're arguments to the main() function
		- name is arbitrary (obviously)
		- **TYPES**
			- `{cpp}argc` is an integer
			- `{cpp}argv` is an array of pointers to char
		- **WHAT DO THEY DO**
			- they're the arguments you pass when after typing the .exe's name to execute it in a command prompt
			- `{cpp}argc` contains the number of arguments passed
			- `{cpp}argv` contains the actual strings you passed
			- **SPECIFICALLY**
				- the first pointer to char in the array contains the address of the first instruction of stocazzo
				- the subsequent ones contain the actual arguments
		- **EXAMPLE**
			- `{cpp}int main(int argc, char* argv[]){}`
			- `{batch}myprogram.exe fortnite balls`