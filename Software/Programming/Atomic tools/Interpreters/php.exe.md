---
tags: []
---
**php.exe** is a [[command-line program]] that handles everything [[PHP]] related.

---

### Commands

`{bash}php` (no options)
- It starts interpreting php code in a [[CLI]] fashion

`{bash}php` +
- `{bash}--help` or `{bash}-h` or `{bash}-help`
	- All the commands
- `{bash}-S localhost:80`
	- Start [[web server]] at the specified host and port.
	  The root directory of the server is [[batch#^current-directory]]
- `{bash}-t path/to/root`
	- Specify the root directory for your [[web server]], starting from the current directory path according to your shell language interpreter.
- `{bash}-c path/to/php.ini`
	- Use a specific configuration file
- `{bash}path/to/myscript.php`
	- Execute your script
- `{bash}-f path/to/myscript.php`
	- Execute your script (same as above)
- `{bash}-r 'write php code here'` or `{bash}-r "write php code here"`
	- Execute code and write output to [[standard output]]
- `-a`
	- go in interactive mode, execute the script line per line
	- it requires the [[#^readline-extension|readline extension]]
	
- `-i`
	- Displays php info
	
---

### Script interpretation

It's actually a mixture of compilation and interpretation:
1. **Parsing:**
	- The PHP interpreter parses the source code and generates an intermediate representation known as the [[AST]].
    
2. **Compilation:**
	- The AST is then translated into an intermediate bytecode. This bytecode is not machine code but is a lower-level representation that can be executed by the Zend Engine, which is the runtime engine for PHP.
    
3. **Execution:**
	- The [[Zend Engine]] executes the bytecode, and the PHP script runs.
there's a mechanism called OpCode Cache that stores the intermediary bytecode in a cache