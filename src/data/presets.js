import debianLogo from "../images/debian-logo.png"
import ubuntuLogo from "../images/ubuntu-logo.png"
import kaliLogo from "../images/kali-logo.png"
import enlightenmentLogo from "../images/enlightenment-logo.png"
import gnomeLogo from "../images/gnome-logo.png"
import lxdeLogo from "../images/lxde-logo.png"
import kdeLogo from "../images/kde-logo.png"
import unityLogo from "../images/unity-logo.png"
import xfceLogo from "../images/xfce-logo.png"
import chromeLogo from "../images/chrome-logo.svg"
import chromeDevLogo from "../images/chrome-dev-logo.svg"
import chromeBetaLogo from "../images/chrome-beta-logo.svg"
import chromiumLogo from "../images/chromium-logo.svg"
import gtkLogo from "../images/gtk-logo.png"
import kodiLogo from "../images/kodi-logo.png"
import xiwiLogo from "../images/xiwi-logo.png"

const presets =  [
    {
        title: "Ubuntu Xenial",
        subtitle: "Basic CLI",
        desc: "Xenial in the terminal",
        options: ["xenial", "keyboard","extension","core","cli-extra"],
        imgs: [ubuntuLogo]

    },
    {
        title: "Ubuntu Xenial",
        subtitle: "Linux Apps",
        desc: "Xenial with Linux apps through Xiwi",
        options: ["xenial", "keyboard","extension","core","cli-extra","audio","xiwi"],
        imgs: [ubuntuLogo, xiwiLogo]

    },
    {
        title: "Ubuntu Xenial",
        subtitle: "Full Desktop",
        desc: "w/ full desktop",
        options: ["xenial", "keyboard","extension","core","cli-extra","audio","xiwi","unity"],
        imgs: [ubuntuLogo, xiwiLogo, unityLogo]
    },
    {
        title: "Debian Buster",
        subtitle: "w/ basic cli",
        desc: "Buster in the terminal",
        options: ["buster", "keyboard", "extension", "core", "cli-extra"],
        imgs: [debianLogo]
    },
    {
        title: "Debian Buster",
        subtitle: "w/ Linux apps",
        desc: "Debian 10 with Linux apps through Xiwi",
        options: ["buster", "keyboard","extension","core","cli-extra","audio","xiwi"],
        imgs: [debianLogo, xiwiLogo]
    },
    {
        title: "Debian Buster",
        subtitle: "w/ full desktop",
        desc: "Debian 10 and the Xfce4 Desktop",
        options: ["buster", "keyboard","extension","core","cli-extra","audio","xiwi","xfce"],
        imgs: [debianLogo, xiwiLogo, xfceLogo]
    },
    {
        title: "Kali Rolling",
        subtitle: "w/ basic cli",
        desc: "Buster in the terminal",
        options: ["kali", "keyboard", "extension", "core", "cli-extra"],
        imgs: [kaliLogo]
    },
    {
        title: "Kali Rolling",
        subtitle: "w/ Linux apps",
        desc: "Debian 10 with Linux apps through Xiwi",
        options: ["kali", "keyboard","extension","core","cli-extra","audio","lxde"],
        imgs: [kaliLogo, xiwiLogo]
    },
    {
        title: "Kali Rolling",
        subtitle: "w/ full desktop",
        desc: "Debian 10 and the Xfce4 Desktop",
        options: ["kali", "keyboard","extension","core","cli-extra","audio","xiwi","lxde"],
        imgs: [kaliLogo, xiwiLogo, xfceLogo]
    },
]

export default presets;