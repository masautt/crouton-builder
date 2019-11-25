import debianLogo from "../images/debian-logo.png"
import ubuntuLogo from "../images/ubuntu-logo.png"
import kaliLogo from "../images/kali-logo.jpeg"
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

const options = [
    {
        name: "Debian",
        desc: "",
        flag: "debian",
        type: "distro",
        link: "https://github.com/dnschneid/crouton/wiki/Debian",
        icon: debianLogo,
        bash: "https://github.com/dnschneid/crouton/tree/master/installer/debian",
    },
    {
        name: "Ubuntu",
        desc: "",
        flag: "ubuntu",
        type: "distro",
        link: "https://github.com/dnschneid/crouton/wiki/Ubuntu",
        icon: ubuntuLogo,
        bash: "https://github.com/dnschneid/crouton/tree/master/installer/ubuntu",
    },
    {
        name: "Kali",
        desc: "",
        flag: "kali",
        type: "distro",
        link: "https://github.com/dnschneid/crouton/wiki/Kali",
        icon: kaliLogo,
        bash: "https://github.com/dnschneid/crouton/tree/master/installer/kali",
    },
    {
        name: "Audio",
        desc: "Support audio playback via Chromium OS's audio system",
        flag: "audio",
        type: "essential",
        reqs: ["core"],
        link: "https://github.com/dnschneid/crouton/wiki/Audio",
        icon: "volume-up",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/audio",
        tips: [
            "Audio from the chroot will now be forwarded to CRAS (Chromium OS audio server), through an ALSA plugin.",
            "Future Chromium OS upgrades may break compatibility with the installed version of CRAS. Should this happen, simply update your chroot."
        ],
    },
    {
        name: "Chrome",
        desc: "Google Chrome browser, stable channel",
        flag: "chrome",
        type: "application",
        link: "https://www.google.com/chrome/",
        icon: chromeLogo,
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/chrome"
    },
    {
        name: "Chrome Beta Channel",
        desc: "Google Chrome browser, beta channel",
        flag: "chrome-beta",
        type: "application",
        link: "https://www.google.com/chrome/beta/",
        icon: chromeBetaLogo,
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/chrome-beta"
    },
    {
        name: "Chrome Dev Channel",
        desc: "Google Chrome browser, dev channel",
        flag: "chrome-dev",
        type: "application",
        link: "https://www.google.com/chrome/dev/",
        icon: chromeDevLogo,
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/chrome-dev"
    },
    {
        name: "Chromium",
        desc: "Chromium browser. Uses the distro's version, which may be old",
        flag: "chromium",
        type: "application",
        link: "https://www.chromium.org/Home",
        icon: chromiumLogo,
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/chromium"
    },
    {
        name: "CLI Tools",
        desc: "Basic CLI tools such as ssh",
        flag: "cli-extra",
        type: "essential",
        reqs: ["core"],
        icon: "terminal",
        tips: ["You can start a shell in a new VT via the startcli host command: sudo startcli"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/cli-extra"
    },
    {
        name: "Core",
        desc: "Performs core system configuration. Most users would want this",
        flag: "core",
        type: "essential",
        icon: "microchip",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/core"
    },
    {
        name: "Enlightenment",
        desc: "Installs the enlightenment desktop environment. (Approx. 50MB)",
        size: 50,
        flag: "e17",
        type: "desktop",
        reqs: ["gtk-extra"],
        icon: enlightenmentLogo,
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/e17",
        link: "https://www.enlightenment.org/",
        tips: ["You can start e17 via the starte17 host command: sudo starte17"],
    },
    {
        name: "Extension",
        desc: "Clipboard synchronization and URL handling with Chromium OS",
        flag: "extension",
        type: "essential",
        reqs: ["x11"],
        icon: "clipboard",
        link: "https://github.com/dnschneid/crouton/wiki/crouton-extension:-websocket-architecture",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/extension",
        tips: ["You must install the Chromium OS extension for integration with crouton to work. The extension is available here: https://goo.gl/OVQOEt"],

    },
    {
        name: "Gnome",
        desc: "Installs the GNOME desktop environment. (Approx. 400MB)",
        size: 400,
        flag: "gnome",
        type: "desktop",
        reqs: ["gtk-extra"],
        icon: gnomeLogo,
        link: "https://www.gnome.org/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/gnome",
        tips: ["You can start GNOME via the startgnome host command: sudo startgnome"],
    },
    {
        name: "Gnome Extra",
        desc: "Installs GNOME along with common applications. (Approx. 1100MB)",
        size: 1100,
        flag: "gnome-desktop",
        type: "desktop-extra",
        reqs: ["gnome"],
        link: "https://www.gnome.org/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/gnome-desktop"
    },
    {
        name: "GTK Tools",
        desc: "GTK-based tools including gdebi and a simple browser",
        flag: "gtk-extra",
        icon: gtkLogo,
        type: "application",
        reqs: ["x11"],
        link: "https://www.gtk.org/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/gtk-extra"
    },
    {
        name: "KDE",
        desc: "Installs a minimal KDE desktop environment. (Approx. 600MB)",
        size: 600,
        flag: "kde",
        type: "desktop",
        reqs: ["x11"],
        icon: kdeLogo,
        link: "https://kde.org/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/kde",
        tips: ["You can start KDE via the startkde host command: sudo startkde"],
    },
    {
        name: "KDE Extra",
        desc: "Installs KDE along with common applications. (Approx. 1000MB)",
        size: 1000,
        flag: "kde-desktop",
        type: "desktop-extra",
        reqs: ["kde"],
        link: "https://kde.org/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/kde-desktop"
    },
    {
        name: "Keyboard Support",
        desc: "Adds support for Chromebook keyboard special keys",
        flag: "keyboard",
        icon: "keyboard",
        type: "essential",
        reqs: ["x11"],
        link: "https://github.com/dnschneid/crouton/wiki/Keyboard",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/keyboard"
    },
    {
        name: "Kodi",
        desc: "Installs the KODI media player. (Approx. 200MB)",
        size: 200,
        flag: "kodi",
        type: "application",
        reqs: ["x11"],
        icon: kodiLogo,
        link: "https://kodi.tv/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/kodi",
        tips: ["You can start KODI via the startkodi host command: sudo startkodi"],
    },
    {
        name: "LXDE",
        desc: "Installs the LXDE desktop environment. (Approx. 200MB)",
        size: 200,
        flag: "lxde",
        type: "desktop",
        reqs: ["gtk-extra"],
        icon: lxdeLogo,
        link: "https://lxde.org/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/lxde",
        tips: ["You can start LXDE via the startlxde host command: sudo startlxde"],
    },
    {
        name: "LXDE Extra",
        desc: "Installs LXDE along with common applications. (Approx. 800MB)",
        size: 800,
        flag: "lxde-desktop",
        type: "desktop-extra",
        reqs: ["lxde"],
        link: "https://lxde.org/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/lxde-desktop"
    },
    {
        name: "Touch Support",
        desc: "Touchscreen and limited generic gesture support.",
        flag: "touch",
        icon: "tablet-alt",
        type: "essential",
        reqs: ["x11"],
        link: "https://github.com/dnschneid/crouton/blob/master/targets/touch",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/touch"
    },
    {
        name: "Unity",
        desc: "Installs the Unity Desktop Environment. (Approx. 700MB)",
        size: 700,
        flag: "unity",
        type: "desktop",
        reqs: ["gtk-extra"],
        link: "https://en.wikipedia.org/wiki/Unity_(user_interface)",
        icon: unityLogo,
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/unity",
        tips: ["You can start Unity via the startunity host command: sudo startunity"],
    },
    {
        name: "Unity Extra",
        desc: "Installs Unity along with common applications. (Approx. 1100MB)",
        size: 1100,
        flag: "unity-desktop",
        type: "desktop-extra",
        link: "https://en.wikipedia.org/wiki/Unity_(user_interface)",
        reqs: ["unity"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/unity-desktop"
    },
    {
        name: "X11",
        desc: "X11 via autodetected backend. Does not install any desktop environment.",
        flag: "x11",
        type: "display",
        link: "https://en.wikipedia.org/wiki/X_Window_System",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/x11"
    },
    {
        name: "XFCE4",
        desc: "Installs the Xfce desktop environment. (Approx. 250MB)",
        size: 250,
        flag: "xfce",
        type: "desktop",
        reqs: ["gtk-extra"],
        icon: xfceLogo,
        link: "https://www.xfce.org/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/xfce",
        tips: ["You can start Xfce via the startxfce4 host command: sudo startxfce4"],
    },
    {
        name: "XFCE4 Extra",
        desc: "Installs Xfce along with common applications. (Approx. 1200MB)",
        flag: "xfce-desktop",
        type: "desktop-extra",
        link: "https://www.xfce.org/",
        reqs: ["xfce"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/xfce-desktop"
    },
    {
        name: "XIWI",
        desc: "X.org X11 backend running unaccelerated in a Chromium OS window.",
        flag: "xiwi",
        type: "display",
        reqs: ["audio", "extension"],
        link: "https://github.com/dnschneid/crouton/wiki/crouton-in-a-Chromium-OS-window-(xiwi)",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/xiwi",
        tips: ["You can open your running chroot desktops by clicking on the extension icon. Once in a crouton window, press fullscreen or the \"switch window\" key to switch back to Chromium OS.",
        "You can launch individual apps in crouton windows by using the \"xiwi\" command in the chroot shell. Use startxiwi to launch directly from the host shell. Use the startxiwi parameter -b to run in the background. Example: sudo startxiwi -b xterm"],
    },
    {
        name: "X.Org",
        desc: "X.Org X11 backend. Enables GPU acceleration on supported platforms.",
        flag: "xorg",
        type: "display",
        reqs: ["audio"],
        link: "https://www.x.org/wiki/",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/xorg",
        tips: ["You can flip through your running chroot desktops and Chromium OS by hitting Ctrl+Alt+Shift+Back and Ctrl+Alt+Shift+Forward."],
    },
    {
        name: "Encryption",
        desc: "Have your chroot be encrypted",
        flag: "-e",
        icon: "key",
        type: "param",
        link: "https://github.com/dnschneid/crouton#with-encryption",
    }
]

export default options;