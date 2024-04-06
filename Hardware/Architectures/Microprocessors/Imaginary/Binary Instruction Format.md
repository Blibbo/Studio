---
aliases:
  - binary instruction formats
---
A format for binary instructions.

At its fundamental level (machine code), it coincides with the phrase [[ISA|"Instruction Set"]] or [[machine code|"machine code"]].
The reason why we have the phrase _"binary instruction format"_ is because sometimes these binary instructions aren't part of an existing instruction set built into a real [[CPU]], but an imaginary one.

When you see the phrase "binary instruction format", we're typically talking about **made up hardware** that will execute the format. Abstraction for real hardware.

The made up hardware is simulated by actual software written in actual machine code.
This specialized software that simulates hardware is called a [[runtime environment]] or a [[VM]].