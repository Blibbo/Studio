---
tags:
  - software
aliases:
  - GNU C Compiler
---
[[C]] compiler from [[GNU]].
It's the first compiler they made in the [[GCC|GNU Compiler Collection]], to

---

### Installation

- **Windows**
	- install [[Chocolatey]]
	- run `choco install mingw` in an administrator privileges shell
	- that's it, you have all the gcc compilers and they're in the [[Windows#^path|path]] already

---

### Commands

- `{bash}gcc yourfile.c -o yourprogram.exe`
	- generate an .exe out of a .c
	- overwrites `yourprogram.exe` if it existed already
- `{bash}gcc -c sourcefile.c -o yourprogram.o`
	- generate an object file
	- it's not the `{bash}-c` flag, it's the `{bash}.o` extension
- `{bash}gcc --version`
	- version of the compiler
	- also tells you the architecture you're compiling for
- `{bash}gcc ... -L/path/to/libs`
	- `{bash}-L` indicates non standard directories to look for libraries
- `{bash}gcc ... -I/path/to/specific/header`
	- path to a specific header file (`.h`)
- `{bash}gcc ... -fPIC ...`
	- create position independent code
	- for creating `.dll`s and other stuff
	- `{bash}gcc ... -fPIC -c my_library.c -o my_library.o`
- `{bash}gcc ... -shared my_library.o -o libmy_library.so`
	- shared stuff needs fPIC stuff
- `{bash}gcc ... -T my_linker_script.ld`
	- use a linker script
- `{bash}gcc ... -Wl,-linkeroption`
	- pass options to the linker
- `{bash}gcc ... -g`
	- adds debugging information in the executable
	- easier to debug with tools like [[GDB]]
- `{bash}gcc ... -lm`
	- `{bash}-l` tells the linker to add a library in the standard path
	- write the library name without the "lib" prefix and the extension
	- `{bash}-lm`
		- [[C#^libm|libm]]
		- included by default, don't bother
	- `{bash}-lc`
		- [[C#^libc|libc]]
		- included by default, don't bother
- `{bash}gcc ... -m64`
	- explicitly compile in [[x86-64|x64]]
	- this happens by default you absolutely don't need this
- **Check compiler flags**
	- **check for AVX2 or AVX-512**
		- `{bash}gcc -march=native -E - < /dev/null | grep avx2`
		- `{bash}gcc -march=native -E - < /dev/null | grep avx512`