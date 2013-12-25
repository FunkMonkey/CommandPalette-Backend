var WindowManager = require("../WindowManager");


var ActionHotKey = {
	id: "hotkey",

	// TODO: find a way to export the interface as well
	execute: function execute(options) {
		return WindowManager.sendHotkey(options.hotkey);
	}
};

module.exports = ActionHotKey;