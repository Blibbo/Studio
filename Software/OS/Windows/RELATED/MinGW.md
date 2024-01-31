---
tags:
  - open-source
aliases:
  - Minimalist GNU for Windows
  - MinGW-w64
---
---

### About MinGW

- [[GNU]] userland stuff but on [[Windows]]
- includes the [[GCC]]
- _~~MinorsGoneWild~~_

---

### Installation

- **[[Chocolatey]]:** ^choco
	- `choco install mingw`
	- installs [[#^mingw-w64]]

---

### Distrubutions

- **MinGW**
	- only 32 bit, original project
- **MinGW-w64** ^mingw-w64
	- fork of the original project
	- both [[x86-32]] and [[x86-64]] development
	- default on [[#^choco]]

---

### Transferred userland

- **Info:**
	- stuff from the [[Unix#Userland]], [[GNU]] and allat
	- I'm just writing the executables here, research on your own
	- I already said all of GCC is here. I'm not going to mention compilers. They're all here
- `objdump`