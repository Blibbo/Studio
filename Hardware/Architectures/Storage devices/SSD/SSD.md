---
aliases:
  - Solid State Disk
  - SSDs
  - Solid State Disks
---
---

### About SSDs

- they use [[NAND flash memory cell|NAND flash memory cells]]
- they have a [[Microcontrollers|Microcontroller]] that manages data access
	- has a garbage collection system that keeps an indexed table of your deallocated memory
	- indexing takes time. If you don't let this buddy index (it starts indexing after some idle time) then the operating system won't know whether it can [[Trimming|trim]]
	- to let it index keep it powered
- they have an interface to connect to the rest of the system, which is [[SATA]] (poopy) or [[NVMe]] (fast)

---

### SATA and NVMe SSDs

- bunch of them
	- ![[maxresdefault.jpg]]
- zoom on the [[M.2]] ones specifically:
	- reminder, SATA is the poopy one, don't be fooled 
	- ![[SATA-NVMe.png]]

### Trivia

- crucial packages and sells SATA SSDs, but the actual memory is built by micron, also where i live