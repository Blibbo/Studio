@echo off
goto :main

:copysettings
	xcopy /Y /s .obsidian "../%1/.obsidian"
	xcopy /Y snippets.js "../%1/snippets.js"
exit /b %errorlevel%

:main
	call :copysettings Canonical
	call :copysettings Personal
exit /b %errorlevel%