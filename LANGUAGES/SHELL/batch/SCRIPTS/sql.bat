@echo off

rem start /b mysqld --defaults-file="C:\ProgramData\MySQL\MySQL Server 8.0\my.ini"
net start MySQL80

call sleep 500

for /f "delims=" %%a in ('call mysql-usr') do (
	set "user=%%a"
)

for /f "delims=" %%a in ('call mysql-psw') do (
	set "password=%%a"
)

if "%1" == "" (
	mysql --port 3307 -u %user% --password=%password% -t && rem 2>nul
) else (
	mysql --port 3307 -u %user% --password=%password% -t < "%1"
)

mysqladmin --port 3307 -u %user% --password=%password% shutdown > nul 2>nul
rem net stop MySQL80

echo on