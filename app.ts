import { App } from "astal/gtk4"
import style from "./style.scss"
import Bar from "./widget/Bar"

import Hyprland from "gi://AstalHyprland"

App.start({
    instanceName: "Bar",
    css: style,
    main() {
        App.get_monitors().map(Bar)
    },
})
