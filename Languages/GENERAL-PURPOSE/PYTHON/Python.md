---
tags:
  - programming
  - language
---
---

### About Python

- lol

---

### Bunch of small programs

- figure out if a file is using CRLF or just LF as line endings
```python
with open('myfile.txt', 'rb') as f:
    data = f.read()
    if b'\r\n' in data:
        print("File uses CRLF (\\r\\n) line endings")
    elif b'\n' in data:
        print("File uses LF (\\n) line endings")
    else:
        print("Unknown line endings")

```