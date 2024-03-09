---
tags:
  - open-source
---
[[mysql.exe|MySQL]] command to manage database servers.

## Commands

- `{batch}mysqld`
	- basic command to start the mysql server
- `{batch}mysqld --console`
	- server output goes to the console the command is being run from
	- the output goes in the log files by default otherwise
- `{batch}mysqld --datadir=C:/my/dir`
	- tells mysql where your actual data is
	- the directory must actually exist, it won't create it
	- the default directory is the same as this command's directory, but in a `/data` subdirectory