@echo off

@set "Region=NA"
@set "gameInstallLocation=C:\Games\World_of_Tanks_%Region%\res\packages\"
rem Name of the package within the \World_of_Tanks_%Region%\res\packages\ folder
@set "packageName0=gui-part1.pkg"
@set "packageName1=gui-part2.pkg"

if exist Source (RD /q /s "Source") else (MD Source)

echo "Copying Files"
@xcopy /v /y "%gameInstallLocation%\%packageName0%" "temp\"
@xcopy /v /y "%gameInstallLocation%\%packageName1%" "temp\"
echo "Finished Copying Files"
echo "Unpacking"
7z x temp\%packageName0% -oSource
7z x temp\%packageName1% -oSource
echo "Finished unpacking"

if exist temp (RD /s /q temp)

pause