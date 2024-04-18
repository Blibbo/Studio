@echo off
setlocal enabledelayedexpansion

set "pointer=variablename"

rem THIS ONE DOESN'T PRINT COMPRENDE
call set "!pointer!=!!!pointer!!! comprende?"
call echo !!!pointer!!!

REM HOWEVER

set "pointer1=variablename1"

rem THIS ONE PRINTS COMPRENDE
call set "%pointer1%=%%%pointer1%%% comprende?"
call echo %%%pointer1%%%

REM how the everloving mother of fuck does this work. Why does the second one... scratch that, why does ANYTHING even. FUCK.

endlocal
pause