---
tags:
  - open-source
aliases:
  - MySQL Server
---
[[Executable]] that starts the [[MySQL]] service on your machine.

## Command-line execution options

`{bash}mysqld` (no options)
- Basic command to start the mysql server. Assumes:
	- The data directory is the same as this executable's directory, but in a `/data` subdirectory.

`{bash}mysqld`
- `{bash}--console`
	- server output goes to the console the command is being run from
	- the output goes in the log files by default otherwise
- `{bash}--datadir=C:/my/dir`
	- Tells mysql where your actual data is.
	- The directory must already exist, it won't create it.