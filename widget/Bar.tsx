import { Gdk } from "astal/gtk4"
import MyButton from "./MyButton"

export default function Bar(gdkmonitor: Gdk.Monitor) {
	return <window visible cssClasses={["Bar"]} gdkmonitor={gdkmonitor}>
		<box>
			Click The button
			<MyButton />
		</box>
	</window >
}
