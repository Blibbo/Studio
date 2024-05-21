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
**Common Intermediate Language** is a [[binary instruction format]] executed by the [[CLR]].

It has a stack-based architecture (idk what that means)

Supports [[JIT]] compiling

Compiled assemblies are stored in `.exe`s or `.dll`s. The binary format in which it's written is standardized and it includes the metadata necessary for the [[CLR]] to load and execute the code.
**IL Disassemblers** or **.NET DECOMPILERS** can be used to view the IL representation of compiled assemblies.

## Common Languages

These are languages that compile to this.

```dataview
TABLE FROM "LANGUAGES" AND [[CIL]]
```

## Standard

The IL standard is **ECMA-335 (CLI)**, where CLI stands for **Common Language Infrastructure**.
Another important standard is the **Common Language Infrastructure Annotated Standard**

The standard defines two other terms: **VES** and **CTS**. They're the **Virtual Execution System** and the **Common Type System**.