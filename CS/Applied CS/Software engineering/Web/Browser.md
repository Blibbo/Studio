---
tags: 
aliases:
  - web browsers
  - browsers
  - web browser
---
A modern **web browser** is a [[Program]] that:
- is able to communicate with [[web server|web servers]] through the [[HTTP]] protocol
- is able to secure the connection through the [[SSH]] and [[TLS]] protocols
- can render a [[markup|markup language]] called [[HTML]]
- accepts a language called [[CSS]] as an [[DSL#eDSL|eDSL]] of HTML
- can [[interpreter|interpret]] a language called [[JavaScript|ECMAScript]]
- has a way for web pages to interact with [[GPU|GPUs]] called [[WebGL]]
- _this one is sorta new_ is able to execute a [[binary instruction format]] called [[WebAssembly]].
It does so much more, conventionally. Some of the stuff it typically features is:
- an **address bar** for entering [[#url|urls]] and interacting with the [[search engine]]
- a **bookmarks toolbar** for bookmarked websites

### URL

- History
	- **RFC 1738**: first specification
	- **RFC 3986**:
		- January 2005
		- obsoleted [[#^rfc-2396|RFC 2396]]
		- relevant today 2024-01-08
	- **RFC 3987**
		- January 2005
		- added [[#IRI]]s
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

## Browsers

```dataview
TABLE FROM "Software/Browsers" and !"Software/Browsers/Engines"
WHERE file.name != this.file.name
```

---

## Trivia

- the [[#^file-protocol|file protocol]] was introduced with the first browsers
	- Mosaic (1993)
	- [[Netscape]] Navigator (1994)
- the file protocol is part of the original [[#^rfc-1738|URL specification]]