### About x64 assembly

- tailored for the [[x86-64]] architecture

---

### Example programs

- **Read a 4 byte long integer** (by chat gpt)
	```
	section .data
	    myInteger dd 0xAABBCCDD  ; Example 4-byte integer (32 bits)
	
	section .text
	    global _start
	
	_start:
	    ; Load the 4-byte integer into a register
	    mov eax, [myInteger]
	
	    ; Your code continues here...
	    ; (You can use the value in the eax register for further operations)
	
	    ; Exit the program (example for Linux syscall)
	    mov eax, 60         ; syscall number for exit
	    xor edi, edi        ; exit code 0
	    syscall
	```
	- [[NASM]]
	- [[Linux]]
	- The 4-byte integer is stored in the `.data` section as `myInteger`.
	- `mov eax, [myInteger]` loads the 4-byte integer from the memory address `myInteger` into the `eax` register.
	- doesn't do anything with it, it just loads it into the register