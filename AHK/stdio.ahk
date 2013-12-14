
stdout_to_console = false

attachToConsole() {
	global stdout_to_console
	DllCall("AttachConsole", "int", -1)
	stdout_to_console = true
}

stdout(s) {
	global stdout_to_console
	if (stdout_to_console = true)
    	FileAppend %s%, CONOUT$
    else 
    	FileAppend %s%, *
}
