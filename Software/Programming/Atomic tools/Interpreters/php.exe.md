---
tags:
  - web-development
  - back-end
  - software
---
---

### Command line execution

- `php --help`
	- all the stuff you can do with this executable
	- also `php -h`
	- also `php -help`
	
- `php -S localhost:80`
	- host a server in the current folder ^folder
	- change `80` to whatever port ~~(or don't)~~
	- requires the directory to have an `index.php` file inside it
		- the default resource returned by the server (when someone makes a request to it) is a compiled version of an `index.php` file that the server looks for in the [[#^folder|folder]]
	- `php -S localhost:8000 -t public`
		- the 'public' directory is the directory where the PHP server should look for files to serve
		- also called document root
		- this specific line is ideal for serving [[Laravel|laravel]] applications
	- `php -S localhost:80 -c path/to/php.ini`
	
- `php filename.php` executes the script
	- also `php -f filename.php` (literally the same command, nothing changes)
	
- `php -r 'phpinfo(); $a = 3; echo $a;'
	- executes php code
	
- `php -a`
	- go in interactive mode, execute the script line per line
	- it requires the [[#^readline-extension|readline extension]]
	
- `php -i`
	- displays php info
	
---

### Script interpretation

It's actually a mixture of compilation and interpretation:
1. **Parsing:**
	- The PHP interpreter parses the source code and generates an intermediate representation known as the [[Abstract Syntax Tree]] (AST).
    
2. **Compilation:**
	- The AST is then translated into an intermediate bytecode. This bytecode is not machine code but is a lower-level representation that can be executed by the Zend Engine, which is the runtime engine for PHP.
    
3. **Execution:**
	- The [[Zend Engine]] executes the bytecode, and the PHP script runs.
there's a mechanism called OpCode Cache that stores the intermediary bytecode in a cache