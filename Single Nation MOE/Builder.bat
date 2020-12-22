@set nation=%~1
@set FileName=%~2
@set filesLocation=%~3

@set "pack=7z a -tzip -mx0"
@set "Copi=xcopy /v /y /s"
@set "gameVersion=1.11.0.0"
@set "deployDate=2020-12-22"

if exist %nation% (RD /s /q %nation%) else (MD %nation%\res\gui\maps\vehicles\decals\insignia\)

%Copi% "%filesLocation%\gun_%nation%_*.dds" "%nation%\res\gui\maps\vehicles\decals\insignia\"

@cd %nation%\res\gui\maps\vehicles\decals\insignia\
setlocal enabledelayedexpansion
set count=9
for %%F in (*.dds) do (
  for /l %%i in (1, 1, %count%) do (
    set num=0%%i
    set num=!num:~-2!
    copy "%%F" "%%~nF_!num!%%~xF"
  )
)
rem Renaming files
del "gun_%nation%_1.dds"
del "gun_%nation%_2.dds"
del "gun_%nation%_3.dds"
rename "gun_%nation%_1_01.dds" "gun_china_1.dds"
rename "gun_%nation%_1_01.dds" "gun_czech_1.dds"
rename "gun_%nation%_1_02.dds" "gun_france_uk_1.dds"
rename "gun_%nation%_1_03.dds" "gun_germany_1.dds"
rename "gun_%nation%_1_04.dds" "gun_italian_1.dds"
rename "gun_%nation%_1_05.dds" "gun_japan_1.dds"
rename "gun_%nation%_1_06.dds" "gun_poland_1.dds"
rename "gun_%nation%_1_07.dds" "gun_sweden_1.dds"
rename "gun_%nation%_1_08.dds" "gun_usa_1.dds"
rename "gun_%nation%_1_09.dds" "gun_ussr_1.dds"
rename "gun_%nation%_2_01.dds" "gun_czech_2.dds"
rename "gun_%nation%_2_02.dds" "gun_france_uk_2.dds"
rename "gun_%nation%_2_03.dds" "gun_germany_2.dds"
rename "gun_%nation%_2_04.dds" "gun_italian_2.dds"
rename "gun_%nation%_2_05.dds" "gun_japan_2.dds"
rename "gun_%nation%_2_06.dds" "gun_poland_2.dds"
rename "gun_%nation%_2_07.dds" "gun_sweden_2.dds"
rename "gun_%nation%_2_08.dds" "gun_usa_2.dds"
rename "gun_%nation%_2_09.dds" "gun_ussr_2.dds"
rename "gun_%nation%_3_01.dds" "gun_czech_3.dds"
rename "gun_%nation%_3_02.dds" "gun_france_uk_3.dds"
rename "gun_%nation%_3_03.dds" "gun_germany_3.dds"
rename "gun_%nation%_3_04.dds" "gun_italian_3.dds"
rename "gun_%nation%_3_05.dds" "gun_japan_3.dds"
rename "gun_%nation%_3_06.dds" "gun_poland_3.dds"
rename "gun_%nation%_3_07.dds" "gun_sweden_3.dds"
rename "gun_%nation%_3_08.dds" "gun_usa_3.dds"
rename "gun_%nation%_3_09.dds" "gun_ussr_3.dds"

cd ..\..\..\..\..\..\..\
cd %nation%

%pack% %FileName% "res"
cd ..
%Copi% %nation%\%FileName%

if exist "%nation%\mods" (RD /s /q "%nation%\mods") else (MD "%nation%\mods\versiondir\")

xcopy /q /v %nation%\%FileName% "%nation%\mods\versiondir\"
cd %nation%
if exist *.zip (del /q *.zip)

if %nation%==wh (set "nation=KV-2R") else (set "nation=%~1")
if %nation%==chuck (set "nation=ChuckNorris") else (set "nation=%~1")

if exist "mods\versiondir\%FileName%" (%pack% "TankSkinsMisc_MarkOfExcellence_Nations_%nation%_%gameVersion%_%deployDate%.zip" "mods") else (echo "Failed"&&pause)

endlocal
exit