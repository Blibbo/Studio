---
tags:
  - open-source
  - engine
---
---

### About Chromium

- open-source browser engine
- uses [[Blink]] (part of the same Chromium project)
- it's basically a fully functioning, complete browser
- any additional layer is either a frivolous feature/spyware

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