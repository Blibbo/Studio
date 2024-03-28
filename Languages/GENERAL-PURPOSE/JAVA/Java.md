---
tags:
  - object-oriented
  - programming
  - language
  - standard
aliases:
  - Java SE
---
[[Programming Language]] that implements [[Object-Oriented Programming]].
The idea is for it to run on a [[VM]] to be cross platfom.

It's not particularly fast (its resources are limited by the [[VM]] it runs in) but it doesn't suck by any means.

The extension for java source code files is `.java`

---

## Build Process

### Basic [[JDK]] workflow

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

### Being a dickhead

- you can compile Java [[JVM#Bytecode instruction set|bytecode]] into [[x86-64]] binary instruction format if you have the `.jar` already
- tools to do it:
	- [[GraalVM Native Image]]
- this takes away the whole point of the vm
- why

---

## Oracle Java

### SE API modules

---

### [[JDK]] modules

---

## Trivia

There was a lot of hype around it when it came out, people made tons of android apps and desktop games with it.