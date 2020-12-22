@set title "Futurama National Decals Mod. By The Illusion. Requested by Domosapient (WG staff NA)"
@set "mainFilesLocation=res\gui\maps\vehicles\decals\"
@set "sourceFile=..\Source\renameME.dds"
@set "pack=7z a -tzip -mx0"
@set "Copi=xcopy /v /y /s"

@Echo off

rem clean up
RD /s /q "res"
del *.wotmod

rem Make initial files

%Copi% %sourceFile% %mainFilesLocation%

cd %mainFilesLocation%

setlocal enabledelayedexpansion
set count=16
for %%F in (*.dds) do (
  for /l %%i in (1, 1, %count%) do (
    set num=0%%i
    set num=!num:~-2!
    copy "%%F" "%%~nF_!num!%%~xF"
  )
)

rem Renaming files

rename "renameME.dds" "alpha_tester.dds"
rename "renameME_01.dds" "beta_tester.dds"
rename "renameME_02.dds" "britain_color.dds"
rename "renameME_03.dds" "china_kuomintan.dds"
rename "renameME_04.dds" "china_star.dds"
rename "renameME_05.dds" "czech_round.dds"
rename "renameME_06.dds" "french_rose.dds"
rename "renameME_07.dds" "germany_bundecross.dds"
rename "renameME_08.dds" "germany_cross.dds"
rename "renameME_09.dds" "germany_ddr.dds"
rename "renameME_10.dds" "italian_flag.dds"
rename "renameME_11.dds" "japanese_sun.dds"
rename "renameME_12.dds" "moder_ring.dds"
rename "renameME_13.dds" "poland_checkers.dds"
rename "renameME_14.dds" "swedish_flag.dds"
rename "renameME_15.dds" "usa_star.dds"
rename "renameME_16.dds" "ussr_star.dds"

cd ..\..\..\..\..\

%pack% TheIllusion.Futurama.NationDecals.wotmod "res"

pause
endlocal

