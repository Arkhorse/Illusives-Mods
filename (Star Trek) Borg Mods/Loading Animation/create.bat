@title "The Illusions Borg Animation creator"
rem this only creates the wotmod and the Public and Relhax zips.
@echo off

@set "deployDate=2020-12-24"
@set "gameVersion=1.11.0.0"
@set "gameVersionPublic=%gameVersion%-2445"
@set "modName=TheIllusion.LoadingAnimation.TheBorgLogo.wotmod"
@set "publicZipName=TheIllusion_LoadingAnimation_TheBorgLogo_%gameVersionPublic%_%deployDate%.zip"
@set "relhaxZipName=GarageGraphics_LoadingWheelAnimation_TheBorgLogo_%gameVersion%_%deployDate%.zip"

if exist res (RD /s /q res) else (MD res\gui\flash\)
if exist %modName% (DEL /q %modName%)

@xcopy /v /y "flash\waiting.swf" "res\gui\flash\"
@xcopy /v /y "flash\waitingTransition.swf" "res\gui\flash\"

7z a -tzip -mx0 %modName% "res"

rem public version

@xcopy /v /y %modName% "mods\1.11.0.0\"
7z a -tzip -mx7 %publicZipName% "mods"

rem Relhax version

@xcopy /v /y %modName% "mods\versiondir\"
7z a -tzip -mx7 %relhaxZipName% "mods"
