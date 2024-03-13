---
aliases:
  - OOP
---
In programming, an object is something that stores data and executes functions.
Abstracting this concept: an object has characteristics and behavior

When designing your program, you imagine a few abstractions for types of **objects** your program needs.
These abstractions (called **classes**) are a generic "object of _that kind_". I'll use the example of a class called "Animal" for this note.

Actual objects in the program get created from that same abstraction.

Key principles of OOP are [[#Encapsulation]], [[#Inheritance]] and [[#Polymorphism]].

## Encapsulation

Data and behaviors are **encapsulated** into objects.
The object **hides** its inner mechanisms to other classes (abstractions) of objects, and communicates through a specific subset of its behavior called [[interface]].

## Inheritance

Abstractions can have sub-abstractions.
Subclasses present the same behavior and characteristics as the parent class, but they add MORE to it, because it's a more specific kind of object.
Going down this pile of abstraction means **specializing** your object.
Choosing a higher-order class means **generalizing** it.

We imagined a type of object (a class) called "Animal".
A more specific type, a subclass, could be a "Dog". One if its specialized behaviors could be "barking", which not all animals can do.

## Polymorphism

When objects specialize, their behaviors might change. This is the case of **overriding**.
Overriding is when the specialized object retains the **same interface** but changes its behavior.

Not to be confused with **overloading**, which can be done within the same class and it's the case of a **different behavior** with a **different interface** that has the same name.

## Languages

```dataview
TABLE FROM "Languages" AND [[Object-Oriented Programming]]
```