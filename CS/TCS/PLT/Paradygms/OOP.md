---
aliases:
  - object-oriented programming
  - object-oriented
---
**Object-oriented programming** is a programming paradygm where data and behavior is encapsulated into objects.
Most of the terminology was coined by [[Alan Kay]], a pioneer of OOP.

## Principles

An **object** is something with characteristics and behavior.
In programming, an object is something that stores data and executes functions.
The point of OOP, however, is not quite _about_ that.

![[Alan Kay#^messaging]]

How objects can implement [[message passing]] is described in three key principles of OOP: [[#Encapsulation]], [[#Inheritance]] and [[#Polymorphism]].

### Encapsulation

Data and behaviors are **encapsulated** into objects.
The object **hides** its inner mechanisms to other classes of objects, and communicates through a subset of its behavior called [[interface]].

### Inheritance

Abstractions can have sub-abstractions.
Subclasses present the same behavior and characteristics as the parent class, but add _more_ to it, because it's a more specific kind of object.

Going down this pile of abstraction means **specializing** your object.
Choosing a higher-order class means **generalizing** it.

Example:
Imagine an abstraction for animals.
A more specific type of object, a subclass, could be a "Dog". One of its specialized behaviors could be "barking", which not all animals can do.

### Polymorphism

#### Overriding

When objects specialize, their behaviors might change. This is the case of **overriding**.
Overriding is when the specialized object retains the ==same interface== but ==changes its behavior==.

#### Overloading

Overriding is not to be confused with [[overloading]], which can be done within the same class and it's the case of a ==different behavior== with a ==different interface== that has the ==same name==.

## Implementations

The following languages implement this programming paradygm.
Just by reading their names, it's obvious that this paradygm is _popular_.

```dataview
TABLE FROM "Languages" AND [[OOP]]
```

## General knowledge pills

### Classes

When designing your program, you imagine a few abstractions for types of objects your program needs.
These abstractions are called **classes**.

The concept of [[schema]] becomes relevant in this kind of programming.

### Methods

Behavior is implemented through [[Subprogram|subroutines]] called [[Method|methods]].

