/// <reference path="../declarations/q.d.ts" />
/// <reference path="../declarations/InterfacesToMerge.d.ts" />


import WindowManager = require("./WindowManager");
import ActionHotKey = require("./Actions/HotKey");

var Backend = {
	
	WindowManager: WindowManager,

	actions: Object.create(null),

	commands: [],

	init: function init() {
		this.actions[ActionHotKey.id] = ActionHotKey;
	},

	executeAction: function (actionId: string, actionOptions: Object, windowId: number) {
		var action = this.actions[actionId];

		return WindowManager.bringWindowToFront(windowId).then(function () {
			return action.execute(actionOptions);
		});


	}
};

export = Backend;