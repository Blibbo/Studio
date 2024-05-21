---
tags: []
aliases:
  - Portable Operating System Interface
  - IEEE POSIX
---
>POSIX provides a set of common API specifications that aim to enable an application written for a POSIX conformant operating system to be compiled for another POSIX conformant operating system.
- https://en.wikipedia.org/wiki/API

**POSIX** is a [[standard]] that provides common [[API|APIs]] for [[OS|operating systems]].
This standard is maintained by the [[IEEE]].

This standard is mostly [[Unix]]-based.

[[Linux]] and various versions of [[Unix#^bsd|BSD]] adhere

---

## File system

- No drive letters in paths
- forward slashes
- `/usr` and `/bin` directories

---

## Components

1. **Shell and Utilities (POSIX.1):** Specifies the command shell and a set of common utilities.
    
2. **System Interfaces (POSIX.1b):** Specifies system calls and library functions for functions like file I/O, process control, and interprocess communication.
    
3. **Real-time Extensions (POSIX.1b):** Adds real-time features to the standard, suitable for real-time and embedded systems.
    
4. **Threads Extensions (POSIX.1c):** Specifies thread creation, synchronization, and management.
    
5. **Security Interfaces (POSIX.1e):** Defines security-related features.

---

## POSIX-compliant systems

These operating systems adhere to posix:
```dataview
TABLE FROM [[OS]] AND [[POSIX]]
```