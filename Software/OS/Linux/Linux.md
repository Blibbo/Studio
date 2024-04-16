---
tags:
  - open-source
  - operating-system
aliases:
  - GNU/Linux
  - Linux kernel
---
**Linux** is a [[Unix]]-based operating system that adheres to [[POSIX]].

Linux is developed by tons of people.
Lots of distributions of this operating system exist.
Linux distributions get commonly referred to as [[#distros]].

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

### Shortcuts

- `Ctrl + L`
	- Clear screen on shells

---

## Distros

```dataview
TABLE FROM "Software/OS/Linux/DISTROS"
```

---

## Trivia

"version 0.01" of the Linux kernel was released by [[Linus Torvalds]] on August 25, 1991.
Linus developed it as a hobby while studying at the University of Helsinki in Finland.

The annoncement of the kernel being released happened on the [[Usenet]] newsgroup comp.os.minix, and Linus described it as "just a hobby"
![[Linus Torvalds#Linux]]

The [[Linux kernel]] and [[GNU]] are both [[GPL|GPL'd]], so any changes to those will be made public.

### [[Linus Torvalds]] on why desktop Linux sucks

https://www.reddit.com/r/programming/comments/r299vn/linus_torvalds_on_why_desktop_linux_sucks/

https://www.youtube.com/watch?v=Pzl1B7nB9Kc