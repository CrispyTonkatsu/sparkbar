import { bind } from "astal/binding";
import Hyprland from "gi://AstalHyprland";


export default function WindowTitle() {

	const hypr = Hyprland.get_default()
	const focused_client = bind(hypr, "focused_client")

	// TODO: Make the title have a max length, this will prevent jank later on

	return <box>{
		focused_client.as(
			client => (
				client &&
				<label label={
					bind(client, "title")
						.as(String)
				} />)
		)
	}</box >
}
