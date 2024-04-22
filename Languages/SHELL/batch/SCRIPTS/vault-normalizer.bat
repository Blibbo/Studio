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





:retrieve_vault

	set "parent_directory=%~1\"
	
	:repeat
		rem remove final backslash and set to its parent (new final backslash)
		for %%i in ("%parent_directory:~0,-1%") do set "parent_directory=%%~dpi"
		
		rem echo Seeking .obsidian in: %parent_directory%

		rem check if i have an .obsidian subfolder
		rem dir needs C:\, not just C:. The final backslash is indifferent for any other path.
		for /f "tokens=* delims=" %%i in ('dir /a:d /b "%parent_directory%"') do (
			if "%%i" == "%OBSIDIAN_SETTINGS%" (
				set "%~2=%parent_directory%"
				exit /b 1
			)
		)

	
	
		for %%i in ("%parent_directory:~0,-1%") do (
			rem %%~i is the current directory to check, without final backslash
			
			rem repeat until parent directory is just the disk
			if "%%~i" == "%%~di" (
				rem failed, there's no vault
				exit /b 0
			) else (
				goto :repeat
			)
		)
		
	rem end repeat until
exit /b 0





:main
setlocal enabledelayedexpansion
	set "OBSIDIAN_SETTINGS=.obsidian"

	call :retrieve_vault "%~dp0" vault_directory
	
	if "%errorlevel%" == "0" (
		echo This script isn't in an Obsidian Vault. Place it inside of one to make it work.
	) else (
		echo VAULT = %vault_directory%
	)
	
	set "BLACKLIST=.git %OBSIDIAN_SETTINGS%"
	set "CURRENT_ATTACHMENTS_NAME=attachments"
	set "ATTACHMENTS_NAME=attachments"

	rem for /r /a "%vault_directory%" /d %%f in (*) do (
	for /f "tokens=* delims=" %%f in ('dir /a:d /b /s "%vault_directory%"') do (
		
		call :in_blacklisted "%%~f" "%blacklist%"
		if "!errorlevel!" == "0" (
			rem not blacklisted (not in .git or .obsidian)
			
			set "original_dir_name=%%~nxf"
			
			if /i "!original_dir_name:.=!" == "%CURRENT_ATTACHMENTS_NAME:.=%" (
				rem attachments folders get handled here
				
				echo Renaming !original_dir_name! into %ATTACHMENTS_NAME% and hiding it

				attrib -h "%%~f"
				ren "%%~f" "%ATTACHMENTS_NAME%"
				attrib +h "%%~df%%~pf%ATTACHMENTS_NAME%"
			) else (
				rem every folder is made uppercase here
				set "uppercase_dir_name=!original_dir_name!"
				call :to_uppercase uppercase_dir_name
				
				echo Renaming !original_dir_name! into !uppercase_dir_name!
				
				rem will fail if directory is hidden (it's okay)
				ren "%%~f" "!uppercase_dir_name!"
			)
		)
	)
		
	pause
	
endlocal & exit /b %errorlevel%