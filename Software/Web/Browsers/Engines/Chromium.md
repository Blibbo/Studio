---
aliases:
  - Chromium project
---
[[open source|Open-source]] [[browser]] engine by [[Google]].

---

## Tech employed

Its rendering engine is called [[Blink]].
Its [[JavaScript]] engine is called [[V8]].

---

## Chromium browsers

### Chromium-based, but proprietary and closed source browsers

```dataview
TABLE FROM [[]] and "SOFTWARE/WEB/BROWSERS" and ([[proprietary software]] or [[closed-source]]) and !"SOFTWARE/WEB/BROWSERS/ENGINE"
WHERE file.name != this.file.name
```

- these are basically all the big ones
- you took something pretty and fucked it up
- why is chromium even open source

---

### Chromium-based open-source browsers

```dataview
TABLE FROM [[]] and "SOFTWARE/WEB/BROWSERS" and ![[proprietary software]] and ![[closed-source]] and !"SOFTWARE/WEB/BROWSERS/ENGINES"
WHERE file.name != this.file.name
```
- he IS pretty brave isnt he

## History

![[Pasted image 20240504172123.png]]