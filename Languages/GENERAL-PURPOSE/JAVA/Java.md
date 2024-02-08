---
tags:
  - object-oriented
  - programming
  - language
  - standard
aliases:
  - Java SE
---
---

### About Java

- the extension for java source code files is `.java`
- it's supposed to run in a specific runtime environment, the [[JDK#JRE]], to make it cross-platform

---

### Processing

By processing I mean "what the fuck do you do with java code"
- **Basic [[JDK]] workflow:**
	- install JDK, put [[javac.exe]] and [[java.exe]] in the [[Windows#^path|path]]
	- now. Make a `HelloWorld.java` file and put your hello world in it:
		```java
		public class HelloWorld {
		    public static void main(String[] args) {
		        System.out.println("Hello, World!");
		    }
		}
		```
	- `javac HelloWorld.java` generates the `.class` (bytecode file)
	- `{bash}java HelloWorld` makes the [[JVM]] execute the bytecode file
		- you don't need to write `{bash}java HelloWorld.class` explicitly
		- write it exactly like you see there
- **Being a dickhead:**
	- you can compile Java [[JVM#Bytecode instruction set|bytecode]] into [[x86-64]] binary instruction format if you have the `.jar` already
	- tools to do it:
		- [[GraalVM Native Image]]
	- this takes away the whole point of the vm
	- why

---

### Standard Edition API modules

---

### [[JDK]] modules