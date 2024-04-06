---
tags:
  - open-source
aliases:
  - MySQL Server
---
[[executable]] that starts the [[MySQL]] service on your machine.

## Commands

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
- `{bash}--defaults-file="path/to/my.ini"`
	- Location of the config file.
- `{bash}ServiceName`
	- Name of the service [[Windows#^services-msc]].
- `{bash}status`
	- Tells you what goes wrong when starting the server.

### Start server

After [[MySQL#Installation]], this command will start the service.

```bash
mysqld --defaults-file="C:\ProgramData\MySQL\MySQL Server 8.0\my.ini"
```
This yields the shell completely.
Alternatively:
```
net start MySQL80
```