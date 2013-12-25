var WindowManager = require("./WindowManager");
var ActionHotKey = require("./Actions/HotKey");

var Backend = {
	
	WindowManager: WindowManager,

	actions: Object.create(null),

	commands: [],

	init: function init() {
		this.actions[ActionHotKey.id] = ActionHotKey;
	},

	executeAction: function (actionId, actionOptions, windowId) {
		var action = this.actions[actionId];

		return WindowManager.bringWindowToFront(windowId).then(function () {
			return action.execute(actionOptions);
		});


	}
};

module.exports = Backend;