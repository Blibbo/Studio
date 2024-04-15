---
aliases:
  - GNU Project
  - GNU's Not Unix
tags:
  - open-source
  - software
---
The **GNU Project** is an attempt at rebuilding [[Unix]] as [[FOSS]].
The project failed to build a [[OS#Kernel|kernel]], so when we say **GNU** we're talking about a remake, a superset, of the [[Unix#Userland||userland]]:
==GNU is just a bunch of open-source programs with little to do with each other==

The kernel that GNU is typically associated with is the [[Linux]].

GNU is supposed to be "kernel-agnostic"

---

## GNU software

The most known parts of the GNU project are the [[GCC]] and [[bash]].

All software notes mentioning GNU:
```dataview
TABLE FROM "Software" AND [[GNU]]
```

---

### Linux distros with GNU

```dataview
TABLE FROM "Software/OS/Linux/DISTROS" AND !"Software/OS/Linux/DISTROS/Not GNU"
```

---

## Trivia

The project was initiated by [[Richard Stallman]] in 1983

- the point was to recreate [[Unix]] but have the whole world work at it. So he needed to both make the whole operating system (kernel + userland) AND to create a legal document that explained precisely what "open-source" means so that the source won't ever be closed again like [[Unix#Trivia|Bell Labs]] had done
- he founded this organization of free software and stuff called [[FSF]]
- **FSF** tried developing its own kernel (called [[Hurd]]) to go along with GNU. **GNU/Hurd** didn't reach a stable release so they switched to this [[Linus Torvalds]] guy's kernel called the [[Linux|Linus kernel]]. So what happened is uhh [[Linux]].
- he made the legal open source document thingy. It's called [[GPL]]. Linus used it on his products, now both the kernel and the userland are protected by it
- he won, pretty much
- Stallman advocates for the term "**GNU/Linux**" but people are just going to say Linux for short obviously. ~~what a fucking moron lol~~