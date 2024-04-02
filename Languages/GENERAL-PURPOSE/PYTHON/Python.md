---
tags:
  - programming
  - language
---
**Python** is a [[high-level language|high-level]] [[general-purpose language|general-purpose]] [[programming language]].
It's a [[multi-paradygm programming language]].
Its strong feature is readability. It forces [[code indentation]].

It's used in [[automation language|automation]].

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

---

## Trivia

The inside joke about python is that you can do anything with a minuscule amount of lines of code.