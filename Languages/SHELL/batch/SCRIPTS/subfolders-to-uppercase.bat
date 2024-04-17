@echo off

setlocal enabledelayedexpansion

set directory=C:\Users\simon\Desktop\Studio

for /D /r "%directory%" %%f in (*) do (
	set "dirname=%%~nf"
	set "uppercase=!dirname:~0,1!"
	set "uppercase=!uppercase![A-Z]"
	rem echo !uppercase!!dirname:~1!
	for %%A in (!uppercase!) do (
        echo "%%A!dirname:~1!"
    )
)

pause