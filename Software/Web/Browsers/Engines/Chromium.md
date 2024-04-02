---
tags:
  - engine
---
[[open source|Open-source]] [[Browser]] engine.
Its rendering engine is called [[Blink]].

---

### Chromium-based, but proprietary and closed source browsers

```dataview
LIST FROM [[]] and "Software/Browsers" and #proprietary and #closed-source and !"Software/Browsers/Engines"
WHERE file.name != this.file.name
```

---

- these are basically all the big ones
- you took something pretty and fucked it up
- why is chromium even open source

---

### Chromium-based open-source browsers

```dataview
LIST FROM [[]] and "Software/Browsers" and !#proprietary and !#closed-source and !"Software/Browsers/Engines"
WHERE file.name != this.file.name
```
- he IS pretty brave isnt he