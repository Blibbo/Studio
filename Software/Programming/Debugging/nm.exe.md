---
tags:
  - open-source
aliases:
  - nm
---
[[GCC]] utility. I don't know its full capabilities, but it's a debugging tool as far as I can see.

On [[MinGW]] this program is is nm.exe because [[Windows]] and stuff

---

### Commands

- `{bash}nm my_program`
	- inspect symbols in the binary file
	- can be either an object file or an executable

---

### Symbols you might find

- **"b" (lowercase):** This symbol indicates a symbol in the uninitialized data section (BSS). Uninitialized data are variables that are declared but not explicitly initialized in the source code. The "b" symbol means that space is allocated for these variables, but they are not initialized to any specific values.
    
- **"T" (uppercase):** This symbol indicates a symbol in the text (code) section. It typically refers to code or functions. The "T" symbol means that the corresponding symbol represents executable code.

- **"U":** Undefined symbol. The symbol is referenced in the code but not defined in the binary.
    
- **"A":** Absolute symbol. The symbol has an absolute value and is not affected by relocation.
    
- **"D":** Data symbol. It represents initialized data in the data section.
    
- **"R":** Read-only data symbol. It represents read-only data in the data section.
    
- **"W":** Weak symbol. It has lower precedence than strong symbols. If multiple definitions exist, the linker will choose the strong symbol.
    
- **"V":** Weak symbol that is referenced in the section but not emitted.