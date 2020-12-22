@title "MOE Nation maker by The Illusion."

@Echo off
@set "mainFilesLocation=..\WoT_GUI_Tracking\Source\gui\maps\vehicles\decals"

start cmd /k CALL Builder.bat china, TheIllusion.SingleNationMOE.China.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat chuck, TheIllusion.SingleNationMOE.Chuck.wotmod, %mainFilesLocation%\custom
start cmd /k CALL Builder.bat czech, TheIllusion.SingleNationMOE.Czech.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat france_uk, TheIllusion.SingleNationMOE.FranceUK.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat germany, TheIllusion.SingleNationMOE.Germany.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat italian, TheIllusion.SingleNationMOE.Italy.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat japan, TheIllusion.SingleNationMOE.Japan.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat poland, TheIllusion.SingleNationMOE.Poland.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat sweden, TheIllusion.SingleNationMOE.Sweden.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat usa, TheIllusion.SingleNationMOE.USA.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat ussr, TheIllusion.SingleNationMOE.USSR.wotmod, %mainFilesLocation%
start cmd /k CALL Builder.bat wh, TheIllusion.SingleNationMOE.KV-2R.wotmod, %mainFilesLocation%\custom

pause