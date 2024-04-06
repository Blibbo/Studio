**mysqladmin.exe** is an [[executable]] that allows you to manage [[mysqld.exe]].

The reason why it exists is that the way to shut down a [[daemon]] like mysqld varies based on your operating system. This command, however, does not. It's the same everywhere.

## Commands

If you use the right credentials, the command will try to **start the server** (the [[mysqld.exe]] process).
So this command is to **start** the server.
Some options change the command's behavior though, like [[#^shutdown]] which does the opposite.

`{bash}mysql` +
- `{bash}-u <username>` or `{bash}--user <username>` or `{bash}--user=<username>`
	- Specify username
- `{bash}-p` or `{bash}--password`
	- Will prompt you for a password
- `{bash}--password=<password>`
	- Force insert the password
	- Deemed unsafe (people can read your password as you write it)
- `{bash}--port=<port>` or `{bash}--port <port>`
	- Specify the port the service is being served in (check through [[Windows#^services-msc]])
	- Replace `{bash}<port>` with `{bash}3306` if unsure
- `{bash}shutdown` ^shutdown
	- Shut down the server started by [[mysqld.exe]].
	  The port has to match the service's.