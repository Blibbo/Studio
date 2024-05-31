@echo off


rem USER

set "usrbat=mysql-usr.bat"

where %usrbat% >nul 2>nul

if %errorlevel% neq 0 (
	echo Missing username. Make a mysql-usr.bat file containing "echo <sql-user>" and put its directory in the system's Path environment variable.
	exit /b %errorlevel%
)

for /f "delims=" %%a in ('call %usrbat%') do (
	set "user=%%a"
)

if '%user%' == '' (
	echo Your %usrbat% file is not echoing the username.
	exit /b %errorlevel%
)

rem PASSWORD

set "pswbat=mysql-psw.bat"

where %pswbat% >nul 2>nul

if %errorlevel% neq 0 (
	echo Missing password. Make a mysql-psw.bat file containing "echo <sql-password>" and put its directory in the system's Path environment variable.
	exit /b %errorlevel%
)

for /f "delims=" %%a in ('call %pswbat%') do (
	set "password=%%a"
)

if '%password%' == '' (
	echo Your %usrbat% file is not echoing the password.
	exit /b %errorlevel%
)



rem start /b mysqld --defaults-file="C:\ProgramData\MySQL\MySQL Server 8.0\my.ini"
net start MySQL80

call sleep 500

if "%1" == "" (
	mysql --port 3307 -u %user% --password=%password% -t && rem 2>nul
) else (
	mysql --port 3307 -u %user% --password=%password% -t < "%1"
)

mysqladmin --port 3307 -u %user% --password=%password% shutdown > nul 2>nul
rem net stop MySQL80

echo on