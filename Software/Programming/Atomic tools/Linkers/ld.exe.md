---
tags:
  - open-source
---
[[GCC]] linker for [[C]].

---

### Commands

- `{bash}ld -o my_program.exe file1.o file2.o`
	- link together these two object files into an executable called `myprogram.exe`
	- `{bash}ld -o program o1.o o2.o -lc`
		- the `{bash}-l` option lets you use a library
		- follow it up with the library name without the `lib` prefix and extension
		- `{bash}-lc`
			- use [[C#^libc|libc]]
		- `{bash}-lm`
			- use [[#^libm|libm]]
		- `-lstdc++`
			- use [[C++#^libstdcpp|libstdc++]]