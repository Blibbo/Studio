@echo off
goto :main

:copysettings
	xcopy /Y /s .obsidian "../%1/.obsidian"
exit /b %errorlevel%

:main
	call :copysettings Canonical
	call :copysettings Personal
exit /b %errorlevel%