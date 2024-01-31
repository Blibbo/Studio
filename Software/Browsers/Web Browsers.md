---
tags:
  - software
aliases:
  - Browser
  - Browsers
  - Web Browser
---
---

### URL

- History
	- **RFC 1738**: first specification
	- **RFC 3986**:
		- January 2005
		- obsoleted [[#^rfc-2396|RFC 2396]]
		- relevant today 2024-01-08
	- **RFC 3987**
		- January 2005
		- they made [[#IRI]]s
		- relevant today 2024-01-08

---

### URI schemes

- `http`
- `https`
- `ftp`
- `mailto`
- `file` ^file-protocol
	- allows browsers to visualize the file system
	- `file:///C:path`
	- `file:///storage/emulated/0/your path`
		- typical path to an [[Android]]'s internal storage

---

### Bunch of browsers

```dataview
LIST FROM "Software/Browsers" and !"Software/Browsers/Engines"
WHERE file.name != this.file.name
```

---

### Trivia

- the [[#^file-protocol|file protocol]] was introduced with the first browsers
	- Mosaic (1993)
	- [[Netscape]] Navigator (1994)
- the file protocol is part of the original [[#^rfc-1738|URL specification]]