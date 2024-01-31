---
tags:
  - low-level
  - programming
  - language
aliases:
  - WebAssembly Text Format
  - WebAssembly Text Representation
  - WAT
  - WebAssembly Text
---
---

### About WAST

- use if you want a [[WebAssembly]] that actually looks like an [[Assembly]] language (it doesn't)
- WAT files have a, you guessed it, `.wat` extension.

---

### Assemblation

- `wat2wasm yourCode.wat -o wasmFile.wasm`
	- [Installation](https://command-not-found.com/wat2wasm)

---

### Quick snippets

- **Random code from ChatGPT:**
	```wast
	(module
	  (func $add (param i32 i32) (result i32)
	    get_local 0
	    get_local 1
	    i32.add)
	  (export "add" (func $add)))
	```
	- this code creates an `$add` function
	- it takes two `i32` parameters
	- the body calls `get_local` and `i32.add`