#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

#include %A_ScriptDir%/stdio.ahk
#include %A_ScriptDir%/JSON.ahk

;attachToConsole()

WinGet, active_id, ID, A

WinGetTitle, active_title, ahk_id %active_id%
StringReplace, active_title, active_title, \ , /, All

WinGet, active_processName, ProcessName, ahk_id %active_id%
StringReplace, active_processName, active_processName, \ , /, All

WinGet, active_pid, PID, ahk_id %active_id%

id_decimal := active_id + 0

res := { id: id_decimal
	   , title: active_title
	   , processName: active_processName
	   , pid: active_pid }

jsonStr := JSON.stringify(res)

stdout(jsonStr)
