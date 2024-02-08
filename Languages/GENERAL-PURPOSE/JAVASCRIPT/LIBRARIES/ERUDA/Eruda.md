---
tags:
  - library
---
---

### About Eruda

- [[JavaScript]] library
- Devtools on mobile.

---

### Bookmark script injection

```javascript
javascript:(function () {
    var script = document.createElement('script');
    script.src="//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = function () {
        eruda.init();
    }
})();
```