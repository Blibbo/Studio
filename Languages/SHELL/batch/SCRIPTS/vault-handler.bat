@echo off & goto :main



:to_uppercase
	
	if not defined %~1 exit /b %errorlevel%
	for %%a in ("a=A" "b=B" "c=C" "d=D" "e=E" "f=F" "g=G" "h=H" "i=I" "j=J" "k=K" "l=L" "m=M" "n=N" "o=O" "p=P" "q=Q" "r=R" "s=S" "t=T" "u=U" "v=V" "w=W" "x=X" "y=Y" "z=Z" "ä=Ä" "ö=Ö" "ü=Ü" "è=È") do (
		call set %~1=%%%~1:%%~a%%
	)
	
exit /b %errorlevel%





:is_descendant_of
setlocal

	set "full_path=%~1"
	set "searched_ancestor=%~2"

	for %%f in ("%full_path:\=" "%") do (	
		if /i "%%~nxf"=="%searched_ancestor%" (
			endlocal & exit /b 1
		)
	)

endlocal & exit /b 0




:in_blacklisted
setlocal enabledelayedexpansion
	set "full_path=%~1"
	set "blacklist=%~2"
	
	
	for %%b in (%blacklist%) do (
		call :is_descendant_of "%full_path%" "%%b"
		if not "!errorlevel!" == "0" (
			endlocal & exit /b 1
		)
	)
	

endlocal & exit /b 0




:main
setlocal enabledelayedexpansion

	set "directory=C:\Users\simon\Desktop\Studio"
	set "blacklist=.git .obsidian"

	for /D /r "%directory%" %%f in (*) do (
		
		call :in_blacklisted "%%f" "%blacklist%"
		if "!errorlevel!" == "0" (
			rem not blacklisted (not in .git or .obsidian)
			
			set "original_dir_name=%%~nxf"
			
			if /i "!original_dir_name:.=!" == "attachments" (
				echo Renaming %%f into .attachments and hiding it
				ren "%%f" ".attachments"
				attrib +h "%%f"
				
			) else (
				set "uppercase_dir_name=!original_dir_name!"
				call :to_uppercase uppercase_dir_name
				
				echo Renaming %%f into !uppercase_dir_name!
				ren "%%f" "!uppercase_dir_name!"
			)
		)
	)
		
	pause
	
endlocal & exit /b %errorlevel%