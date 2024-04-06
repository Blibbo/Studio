---
aliases:
  - IL
  - Common Intermediate Language
  - Microsoft Intermediate Language
  - MSIL
  - Intermediate Language
tags:
  - open-source
---
[[binary instruction format|binary instruction format]] executed by the [[CLR]]

It has a stack-based architecture (idk what that means)

Supports [[JIT]] compiling

Compiled assemblies are stored in `.exe`s or `.dll`s. The binary format in which it's written is standardized and it includes the metadata necessary for the [[CLR]] to load and execute the code.
**IL Disassemblers** can be used to view the IL representation of compiled assemblies.

---

### Common Languages

These are languages that compile to this.
```dataview
TABLE FROM "Languages/GENERAL-PURPOSE" AND [[CIL]]
```