import { Gdk } from "astal/gtk4"
import { Button } from "astal/gtk4/widget"

export default function Bar(gdkmonitor: Gdk.Monitor) {
	return <window visible cssClasses={["Bar"]} gdkmonitor={gdkmonitor} >
		<box>
			This is the content of the bar this should be showing up somewhere
			<Button />
		</box>

	</window >
}
