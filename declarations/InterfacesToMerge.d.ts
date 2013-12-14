
// TODO: merge these interfaces in the according files, once TS Bug #1117 has been fixed
// https://typescript.codeplex.com/workitem/1117

declare module Interfaces {

	export module ActionHotKey {
		export interface IExecuteOptions {
			hotkey: string;
		}
	}

	export module WindowManager {
		export interface IWindowData {
			id: number;
			title: string;
			processName: string;
			pid: number;
		}
	}
}