/// <reference path="../../declarations/InterfacesToMerge.d.ts" />

import WindowManager = require("../WindowManager");


/*
interface IHotKeyOptions {
 	hotkey: string;
}
*/
var ActionHotKey = {
	id: "hotkey",

	// TODO: find a way to export the interface as well
	execute: function execute(options: Interfaces.ActionHotKey.IExecuteOptions) {
		return WindowManager.sendHotkey(options.hotkey);
	}
} 

export = ActionHotKey;