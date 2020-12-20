@title "MOE Nation maker by The Illusion."

@Echo off
@set "filesLocation=Source\GUI\gui\maps\vehicles\decals\insignia"
@set "FileName=TheIllusion.SingleNationMOE.%nation%.wotmod"
@set "Deploydate=2020-12-17"
@set "WorkingDIR=Source"
@set "pack=7z a -tzip -mx0"
rem %Copi%
@set "Copi=xcopy /v /y /s"

start cmd /k CALL Builder.bat china, TheIllusion.SingleNationMOE.China.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat chuck, TheIllusion.SingleNationMOE.Chuck.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia\custom
start cmd /k CALL Builder.bat czech, TheIllusion.SingleNationMOE.Czech.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat france_uk, TheIllusion.SingleNationMOE.FranceUK.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat germany, TheIllusion.SingleNationMOE.Germany.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat italian, TheIllusion.SingleNationMOE.Italy.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat japan, TheIllusion.SingleNationMOE.Japan.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat poland, TheIllusion.SingleNationMOE.Poland.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat sweden, TheIllusion.SingleNationMOE.Sweden.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat usa, TheIllusion.SingleNationMOE.USA.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat ussr, TheIllusion.SingleNationMOE.USSR.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia
start cmd /k CALL Builder.bat wh, TheIllusion.SingleNationMOE.KV-2R.wotmod, Source\GUI\gui\maps\vehicles\decals\insignia\custom

pause