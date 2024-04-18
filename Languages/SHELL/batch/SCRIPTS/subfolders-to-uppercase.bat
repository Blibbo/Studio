@echo off & goto :main



:to_uppercase
	
	if not defined %~1 exit /b %errorlevel%
	for %%a in ("a=A" "b=B" "c=C" "d=D" "e=E" "f=F" "g=G" "h=H" "i=I" "j=J" "k=K" "l=L" "m=M" "n=N" "o=O" "p=P" "q=Q" "r=R" "s=S" "t=T" "u=U" "v=V" "w=W" "x=X" "y=Y" "z=Z" "ä=Ä" "ö=Ö" "ü=Ü" "è=È") do (
		call set %~1=%%%~1:%%~a%%
	)
	
exit /b %errorlevel%





:is_descendant_of
setlocal

	set "full_path=%1"
	set "searched_ancestor=%2"

	for %%f in ("%full_path:\=" "%") do (
		if /i "%%~nxf"=="%searched_ancestor%" (
			exit /b 1
		)
	)

endlocal & exit /b 0




:main
setlocal enabledelayedexpansion

	set directory=C:\Users\simon\Desktop\Studio

	for /D /r "%directory%" %%f in (*) do (
		
		
		call :is_descendant_of %%f .git
		echo "%errorlevel%" == "0" %%f not descendant .git
		if "%errorlevel%" == "0" (


			set "lowercase_dir_name=%%~nf"
			set "uppercase_dir_name=!uppercase_dir_name!"
			call :to_uppercase uppercase_dir_name
			rem echo !lowercase_dir_name!
			rem echo !uppercase_dir_name!
		)
		
	)
		
	pause
	
endlocal & exit /b %errorlevel%