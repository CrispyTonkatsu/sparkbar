import { bind } from "astal"
import { Gdk } from "astal/gtk4"

import Hyprland from "gi://AstalHyprland"

import MyButton from "./MyButton"
import WindowTitle from "./WindowTitle"

export default function Bar(gdkmonitor: Gdk.Monitor) {
	return <window
		visible
		cssClasses={["Bar"]}
		gdkmonitor={gdkmonitor}>

		<box>
			<WindowTitle />
			<MyButton />
		</box>
	</window >
}
