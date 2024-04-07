---
aliases:
  - Basic Input/Output System
  - legacy BIOS
  - legacy firmware
---
---

### About the BIOS

- the original BIOS was a program stored in the ROM or on the motherboard. It was meant to test the hardware and pass control to the OS
- it's the traditional firmware interface
- **Limitations:**
	- 16-bit processors only
	- 2.2TB hard drive support
	- text-based
	- limited user interaction
	- old
	- slow

---

### Legacy Boot Process

- loads the operating system from the **Master Boot Record** (**MBR**) of the boot device

---

### Partitioning

- _"Works with MBR (Master Boot Record) partitioning scheme, which has limitations on disk size and the number of partitions."_
- i have no idea what any of this means

---

### Trivia

**Development:**
- early **'80s** by **IBM** for the **IBM PC**
- became a de facto standard for PCs
**Misnomer:**
- "BIOS" gets also used to refer to the system's firmware generically
- what you'll often see is "BIOS Mode: [[UEFI]]", as opposted to the system actually having a BIOS. If it did, you would read "BIOS Mode: Legacy" rather than "BIOS Mode: BIOS" which reads cringey