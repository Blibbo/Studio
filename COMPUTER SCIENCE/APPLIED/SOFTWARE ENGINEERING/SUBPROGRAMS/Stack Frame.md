---
aliases:
  - Activation Record
  - Record di Attivazione
  - Frame di Stack
---
It's a function's **activation record**, stored in the [[Function Call Stack]].

This record contains data relative to a specific invocation of a function:
- the **actual parameters** passed to the function
- statically declared data

It is ==deallocated in its entirety== at the end of the [[function (computer science)|function (computer science)]] (`return`).