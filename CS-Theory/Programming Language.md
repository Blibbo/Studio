---
aliases:
  - Language
  - languages
---


[Status:: unfinished]

It's a format in which you write text, so that the text can be turned into [[software]]. Translation is handled by *other* software (see [[Translator|translators]]).

People make different programming languages because **they don't want to deal with how things are happening**, they just want to make them happen.
Based on what these things are, they will **abstract** the previous language in a certain way.

Before abstracting anything, the first code you can write is machine code.
Machine code is a sequence of instructions your [[CPU]] is capable of executing directly.
These instructions are documented in your cpu's [[ISA]] and they're binary because to tell the cpu to do something you pass your 0s and 1s in the form of current or tension or some shit idk.
What this code does is work with the microprocessor's little memories (called registers) and other bullshit in the chip.

Let's say I want to make a language that uses the cpu like a calculator. I want to write `3 + 4` in the source code and have the program return `7`. I don't care about *how*, so I don't care about which specific registers the cpu uses to make that calculation. It just has to do it.
**HOWEVER**, say I DO want to use a specific register. I **lost the ability to do that** with my new language.

When a new language adds a **layer of abstraction** it means it "abstracts things away". They **cease to exist**.
CPU registers do not exist for all modern high level languages.

[[C]] is one of these languages that chose to abstract away registers.
C does however let you work directly with memory addresses in the RAM (through things called pointers).
If you go higher to things like [[JavaScript]] or [[Lua]], memory addresses have been abstracted away, they don't exist. They still have to be dealt with, but the responsibility is passed over to whoever made the software to translate the language.

Big, detailed and complex operations get reduced to a measly few lines of code the higher up you go in the pile of abstraction, which is great because it makes your code more meaningful and making functioning apps becomes easier.

When you study _low level_ concepts instead, you see through the cracks of abstraction and you gain more control because you know exactly the implications of what you're doing, how fast it is, and whether there's a faster approach.

Eventually, you might get to a point where the "faster approach" is abandoning your current tool and using a lower level one, or simply one that didn't murder the thing you're trying to do.
High level languages have limitations.
We can't make programming languages just plain like EASY to read: a program is made not only by your logic, but also by how the hardware is going to perform your logic; as much as you try stripping that last part away.

However, this *does* have the unwanted result of making higher level languages slower and just generally worse performing.
We say they "have other strengths". ~~like we do to special needs children~~
Online, they call the newest ones "toy languages" because they're dicks. Don't worry about it

Jokes aside, if you have a broad idea about what you want to do and want to make a quick draft, a toy language will aid you in quickly seeing your idea in action and see if your brain farted or whether it's actually doable.
Whenever you decide to stop fucking around, it's easy to see how working *with* the machine is way faster than avoiding it like the plague.

Though if I'm being honest, nobody who doubts lower level tools is going to build a project big and computationally intensive enough (save programs with shitty algorithms) to even see the difference between these tools, so of course the readable one is better. Fuck's sake.

At the moment, we have like THREE of these super fast tools that are actually used and they're [[C]], [[C++]] and m-fing [[Rust]]. Have **YOU** heard of Rust? If not, stop saying C is pointless, DAMN IT.




# Abstraction



# Low level languages



# High level languages



