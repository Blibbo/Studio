---
aliases:
  - stack memory
  - memoria stack
---

It's a [[Stack]] data structure that contains [[Stack Frame|Activation Records]].

You push a new record every time you **call** a function.
You pop the last called record every time you **return** from a function.

To "Pop" from this Stack means to **deallocate** the whole activation record.

# Static data

Let's say `{c}staticData` is a variable declared within the function body.

We say this variable was declared "in the Stack", or that it's "**statically declared**" because it's inside a stack frame (a.k.a. activation record), that's found in the Stack and and can't be deallocated or reallocated until **return**: it's **static**.

Now, the average return in a programming language looks like this: `{c}return staticData;`.
We said **return** is what deallocates an entire frame: formal parameters, all variables, everything.
So what the fuck does it mean that we're returning a specific variable?

It means we're **copying one** of those variables before deallocating everything. Salvaging just 1 singular piece of information before shutting the whole thing down. That copied piece of information is given to the EAX [[Register]] according to most [[Calling Convention|calling conventions]].