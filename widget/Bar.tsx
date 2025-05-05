import { bind } from "astal"
import { Gdk } from "astal/gtk4"

import Hyprland from "gi://AstalHyprland"

import MyButton from "./MyButton"
import WindowTitle from "./WindowTitle"

export default function Bar(gdkmonitor: Gdk.Monitor) {

	// TODO: Make the title have a max length, this will make it nicer to have there

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
