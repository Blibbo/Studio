---
tags:
  - web-development
  - front-end
  - framework
  - library
---
---

### You might not need jQuery

https://youmightnotneedjquery.com/

- `{javascript}$(document).ready()`
	- [stackoverflow thread](https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery)
	- `{javascript}const ready = fn => document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);`
	
---