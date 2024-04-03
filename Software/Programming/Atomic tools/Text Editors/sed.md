---
tags:
  - tool
---
---

### About sed

- command-line utility tool in [[Unix]] systems
- which means we're probably talking [[Bash]]

---

### Commands

- **Info:**
	- if you don't give a `file.txt` argument it'll read from standard input
	- sed will output the result of the operation to the standard output ^output
	- when you see `pattern` it's referring to either a string it looks for or a [[Regex|regex]]
- `{bash}sed 's/look for this/replace with this/' input.txt` ^substitute
	- substitute command
- `{bash}sed 's/pattern/replacement/' file.txt > output.txt`
	- instead of [[#^output|this]] it'll write the output in an `output.txt` file
- `{bash}sed 's/[0-9]\+/NUMBER/' input.txt`
	- substitute by matching a [[Regex|regex]]
- `{bash}sed -i 's/pattern/replacement/' file.txt`
	- instead of [[#^output|this]] it'll overwrite the original file
- `{bash}sed -i.bak 's/pattern/replacement/' file.txt`
	- it'll make a `file.txt.bak` file before proceeding with overwriting
- `{bash}sed -n '/pattern/p' input.txt`
	- print lines where it matches `pattern`
	- `-n` tells sed to stfu and not print everything (since the `p` command is anyway in this case)
- `{bash}sed -n '10,20p' input.txt`
	- print lines `10` to `20`. You can omit the second number and it'll default to the end of the file
- `{bash}sed '/pattern/d' input.txt`
	- delete lines matching `pattern`
- `{bash}sed -e 's/pattern1/replacement/' -e '/pattern2/d' input.txt`
	- combine multiple commands
- `{bash}sed '5a\This is a new line' input.txt`
	- append below line `5`
- `{bash}sed '5i\This is a new line' input.txt`
	- insert above line `5`