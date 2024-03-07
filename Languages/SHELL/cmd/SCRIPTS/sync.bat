@echo off
setlocal enabledelayedexpansion

if "%1" neq "" (
	set device=%1
) else (
	set device_bat=device
	if "!device_bat!" == "" echo empty
	REM check if the command exists (i don't know why this is the syntax)
	where !device_bat! >nul 2>nul
	
	if !errorlevel! equ 0 (
		for /f "delims=" %%a in ('call !device_bat!') do (
			set "device=%%a"
		)
	) else (
		echo Please provide a device name.
		exit /b 1
	)
)

set commit_msg=commit from %device%

echo on
git pull && git add * && git commit -a -m "%commit_msg%" && git push

@echo off
endlocal
exit /b %errorlevel%