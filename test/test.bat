@echo off

setlocal enabledelayedexpansion

set CWD=%~d0%~p0
set ERR=0

for /f %%d in ('dir /b /a:d %CWD%') do (

  for /f %%f in ('dir /b %CWD%%%d\*.test.js') do (

    node %CWD%%%d\%%f

    if ERRORLEVEL 1 (
      set /a ERR=!ERR! + %ERRORLEVEL%
      echo %%d\%%f ... FAIL

    ) else (
      echo %%d\%%f ... PASS

    )
  )
)

exit /b %ERR%

endlocal
