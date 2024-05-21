---
aliases:
  - Solid State Disk
  - SSDs
  - Solid State Disks
---
An **SSD** is a memory storage device that uses [[NAND flash memory cell|NAND flash memory cells]].
They have a [[microcontroller|microcontroller]] that manages data access, [[#garbage collection and trimming]].
They have interfaces to connect to the rest of the system:
- [[SATA]] (poopy)
- [[NVMe]] (fast)

---

### Garbage collection and trimming

When the SSD is powered and idle (not reading, not writing) for a while, the microcontroller inside starts indexing and keeping track of "empty" cells.
They might not actually be empty, but the operating system says they are, so they're treated as empty and can be overwritten.

If the table isn't updated and the SSD is almost full, it might get super slow. No data loss, just slow. Let the table update and it gets fixed right away.
- **Why:**
  it gets told to write. Tries to write in a place it thinks is empty. Place is not empty. It doesn't do it and updates the table instead. Then does so for every single cell it has to write. Performance drops drastically and it's basically unusable. Leave it marinating in power for like half an hour and I promise it's gonna be okay.
  Said to potentially require eight full hours.

Trimming is something operating systems can do.
It's the process of writing "0" in every cell marked as empty, making it truly empty. I'm not sure whether it's necessary. It's an optimization the OS offers. It can do that periodically.

---

### SATA and NVMe SSDs

- bunch of them
	- ![[maxresdefault.jpg]]
- zoom on the [[M.2]] ones specifically:
	- reminder, SATA is the poopy one, don't be fooled 
	- ![[SATA-NVMe.png]]

### Trivia

- crucial packages and sells SATA SSDs, but the actual memory is built by micron, also where i live