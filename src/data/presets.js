import ubuntuXenialApps from "../images/ubuntu-xenial-apps.png"
import ubuntuXenialCli from "../images/ubuntu-xenial-cli.png"
import ubuntuXenialDesktop from "../images/ubuntu-xenial-desktop.png"

const presets =  [
    {
        name: "Ubuntu 16.04 Basic CLI",
        desc: "Xenial in the terminal",
        options: ["xenial", "keyboard","extension","core","cli-extra"],
        img: ubuntuXenialCli

    },
    {
        name: "Ubuntu 16.04 Desktop Apps",
        desc: "Xenial with Desktop Apps through Xiwi",
        options: ["xenial", "keyboard","extension","core","cli-extra","audio","xiwi"],
        img: ubuntuXenialApps
    },
    {
        name: "Ubuntu 16.04 Basic Desktop",
        desc: "Xenial and the Unity Desktop.",
        options: ["xenial", "keyboard","extension","core","cli-extra","audio","xiwi","unity"],
        img: ubuntuXenialDesktop
    },
    {
        name: "Debian 10 - CLI Only",
        desc: "Buster in the terminal",
        options: ["buster", "keyboard", "extension", "core", "cli-extra"],
        img: ""
    },
    {
        name: "Debian 10 - Desktop Apps",
        desc: "Debian 10 with Desktop Apps through Xiwi",
        options: ["buster", "keyboard","extension","core","cli-extra","audio","xiwi"],
        img: ""
    },
    {
        name: "Debian 10 - Basic Desktop",
        desc: "Debian 10 and the Xfce4 Desktop",
        options: ["buster", "keyboard","extension","core","cli-extra","audio","xiwi","xfce"],
        img: ""
    },
    {
        name: "Kodi Server",
        desc: "Kodi",
        options: ["xenial","kodi"],
        img: ""
    }
]

export default presets;