/// <reference path="../declarations/node.d.ts" />
/// <reference path="../declarations/InterfacesToMerge.d.ts" />

import path = require("path");
import q_child_process = require("./Utilities/q_child_process");

var exec = q_child_process.exec;

var AHK_DIR = path.join(__dirname, "..", "AHK");


var WindowManager = {

	getCurrentWindow: function getCurrentWindow(): Q.Promise<Interfaces.WindowManager.IWindowData> {
		return exec("autohotkey " + path.join(AHK_DIR, "GetCurrentWindow.ahk")).then(function (res) {
			return <Interfaces.WindowManager.IWindowData>JSON.parse(res.stdout);
		});
	},

	bringWindowToFront: function bringWindowToFront(id) {
		return exec("autohotkey " + path.join(AHK_DIR, "BringWindowToFront.ahk " + id)).then(function (res) {
			return true;
		});
	},

	convertHotkeyElement: function convertHotkeyElement(elem) {
		switch (elem) {
			case "ctrl": 
			case "ctrl_cmd": return "^";
			case "alt":      return "!";
			case "shift":    return "+";
			case "win":      return "#";

			default: 
				{
					if(elem.length === 1)
						return elem;
					else
						return "{" + elem + "}"; // TODO map Sublime to AHK
				}
		}
	}, 

	sendHotkey: function bringWindowToFront(hotkey) {
		var hotkeyAHK = hotkey.split("+").map(this.convertHotkeyElement).join("");
		return exec("autohotkey " + path.join(AHK_DIR, 'SendInput.ahk "' + hotkeyAHK + '"')).then(function (res) {
			return true;
		});
	}

};

export = WindowManager;