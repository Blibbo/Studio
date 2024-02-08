---
aliases:
  - IL
  - Common Intermediate Language
  - CIL
  - Microsoft Intermediate Language
  - MSIL
tags:
  - open-source
---
---

### About IL

- executed by the [[CLR]]
- stack-based architecture
- binary format. Low level representation. The whole deal. It's yet another [[virtual machine]]
- compiled assemblies are stored in `.exe`s or `.dll`s. The binary format in which it's written is standardized and it includes the metadata necessary for the [[CLR]] to load and execute the code
- [[JIT]] compiling
- **IL Disassemblers** can be used to view the IL representation of compiled assemblies