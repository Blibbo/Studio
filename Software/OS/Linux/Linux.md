---
tags:
  - open-source
  - operating-system
aliases:
  - GNU/Linux
---
[[Unix]]-based operating system.

Linux is developed by tons of people and lots of distributions of this operating system exist. These distributions get referred to as [[#distros]]

---

## Userland

The original Linux is GNU/Linux, which means the userland is typically [[GNU]].
There are a shit ton of Linux distributions now though, and many of them are not based on GNU. Either ways, typical [[Unix#Userland]] utilities are part of any Linux system.

Here are a bunch of Linux-unique utilities:

- `{bash}grep flags /proc/cpuinfo`
	- find out info about the cpu
- `{bash}lscpu`
	- info about the cpu
	- check for "Flags" to see if AVX2 or AVX-512 is listed

---

## Distros

```dataview
LIST FROM "Software/OS/Linux/DISTROS"
```

---

## Trivia

- the [[Linux kernel]] and [[GNU]] are the ones with the [[GPL]]. So those components are open-source.
- Technically, anything else a Linux distribution has can be proprietary and closed-source.
- practically, no it's not lol
- the whole point of this os is that open source = good