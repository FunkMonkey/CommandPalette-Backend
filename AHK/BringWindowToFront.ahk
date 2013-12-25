#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

;DllCall("AttachConsole", "int", -1)

ConWrite(s) {
    FileAppend %s%, *; CONOUT$
}

id = %1%

WinGetTitle, title, ahk_id %id%
;MsgBox, %title%

WinActivate, ahk_id %id%
