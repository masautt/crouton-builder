export default [
    {
        name: "Audio",
        desc: "Support audio playback via Chromium OS's audio system",
        flag: "audio",
        type: "essential",
        reqs: ["core"],
        tips: [
            "Audio from the chroot will now be forwarded to CRAS (Chromium OS audio server), through an ALSA plugin.",
            "Future Chromium OS upgrades may break compatibility with the installed version of CRAS. Should this happen, simply update your chroot."
        ],
        link: "https://github.com/dnschneid/crouton/wiki/Audio",
        icon: "",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/audio"
    },
    {
        name: "Chrome",
        desc: "Google Chrome browser, stable channel",
        flag: "chrome",
        type: "application",
        link: "https://www.google.com/chrome/",
        icon: "https://www.google.com/chrome/static/images/chrome-logo.svg",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/chrome"
    },
    {
        name: "Chrome Beta Channel",
        desc: "Google Chrome browser, beta channel",
        flag: "chrome-beta",
        type: "application",
        link: "https://www.google.com/chrome/beta/",
        icon: "https://www.google.com/chrome/static/images/beta/chrome-beta-logo.svg",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/chrome-beta"
    },
    {
        name: "Chrome Dev Channel",
        desc: "Google Chrome browser, dev channel",
        flag: "chrome-dev",
        type: "application",
        link: "https://www.google.com/chrome/dev/",
        icon: "https://www.google.com/chrome/static/images/dev/chrome-dev-logo.svg",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/chrome-dev"
    },
    {
        name: "Chromium",
        desc: "Chromium browser. Uses the distro's version, which may be old",
        flag: "chromium",
        type: "application",
        link: "https://www.chromium.org/Home",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Chromium_Material_Icon.png",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/chromium"
    },
    {
        name: "CLI Tools",
        desc: "Basic CLI tools such as ssh",
        flag: "cli-extra",
        type: "essential",
        reqs: ["core"],
        link: "https://github.com/dnschneid/crouton/blob/master/targets/cli-extra",
        tips: ["You can start a shell in a new VT via the startcli host command: sudo startcli"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/cli-extra"
    },
    {
        name: "Core",
        desc: "Performs core system configuration. Most users would want this",
        flag: "core",
        type: "essential",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/core"
    },
    {
        name: "Enlightenment",
        desc: "Installs the enlightenment desktop environment. (Approx. 50MB)",
        size: 50,
        flag: "e17",
        type: "desktop",
        reqs: ["gtk-extra"],
        tips: ["You can start e17 via the starte17 host command: sudo starte17"],
        icon: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0020/2526/brand.gif?itok=idEq0Bve",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/e17"
    },
    {
        name: "Extension",
        desc: "Clipboard synchronization and URL handling with Chromium OS",
        flag: "extension",
        type: "display",
        reqs: ["x11"],
        tips: ["You must install the Chromium OS extension for integration with crouton to work. The extension is available here: https://goo.gl/OVQOEt"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/extension"

    },
    {
        name: "Gnome",
        desc: "Installs the GNOME desktop environment. (Approx. 400MB)",
        size: 400,
        flag: "gnome",
        type: "desktop",
        reqs: ["gtk-extra"],
        tips: ["You can start GNOME via the startgnome host command: sudo startgnome"],
        icon: "https://library.kissclipart.com/20180920/kue/kissclipart-gnome-logo-clipart-gnome-shell-computer-icons-855a2cf3855d325e.png",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/gnome"
    },
    {
        name: "Gnome Extra",
        desc: "Installs GNOME along with common applications. (Approx. 1100MB)",
        size: 1100,
        flag: "gnome-desktop",
        type: "desktop-extra",
        reqs: ["gnome"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/gnome-desktop"
    },
    {
        name: "GTK Tools",
        desc: "GTK-based tools including gdebi and a simple browser",
        flag: "gtk-extra",
        type: "application",
        reqs: ["x11"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/gtk-extra"
    },
    {
        name: "KDE",
        desc: "Installs a minimal KDE desktop environment. (Approx. 600MB)",
        size: 600,
        flag: "kde",
        type: "desktop",
        reqs: ["x11"],
        tips: ["You can start KDE via the startkde host command: sudo startkde"],
        icon: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/desktop-environment-kde-icon.png",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/kde"
    },
    {
        name: "KDE Extra",
        desc: "Installs KDE along with common applications. (Approx. 1000MB)",
        size: 1000,
        flag: "kde-desktop",
        type: "desktop-extra",
        reqs: ["kde"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/kde-desktop"
    },
    {
        name: "Keyboard Support",
        desc: "Adds support for Chromebook keyboard special keys",
        flag: "keyboard",
        type: "essential",
        reqs: ["x11"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/keyboard"
    },
    {
        name: "Kodi",
        desc: "Installs the KODI media player. (Approx. 200MB)",
        size: 200,
        flag: "kodi",
        type: "application",
        reqs: ["x11"],
        tips: ["You can start KODI via the startkodi host command: sudo startkodi"],
        icon: "https://p1.hiclipart.com/preview/645/498/511/clay-os-6-a-macos-icon-kodi-white-square-icon-png-clipart.jpg",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/kodi"
    },
    {
        name: "LXDE",
        desc: "Installs the LXDE desktop environment. (Approx. 200MB)",
        size: 200,
        flag: "lxde",
        type: "desktop",
        reqs: ["gtk-extra"],
        tips: ["You can start LXDE via the startlxde host command: sudo startlxde"],
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/LXDE-logo.svg",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/lxde"
    },
    {
        name: "LXDE Extra",
        desc: "Installs LXDE along with common applications. (Approx. 800MB)",
        size: 800,
        flag: "lxde-desktop",
        type: "desktop-extra",
        reqs: ["lxde"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/lxde-desktop"
    },
    {
        name: "Touch Support",
        desc: "Touchscreen and limited generic gesture support.",
        flag: "touch",
        type: "essential",
        reqs: ["x11"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/touch"
    },
    {
        name: "Unity",
        desc: "Installs the Unity Desktop Environment. (Approx. 700MB)",
        size: 700,
        flag: "unity",
        type: "desktop",
        reqs: ["gtk-extra"],
        tips: ["You can start Unity via the startunity host command: sudo startunity"],
        icon: "https://s24255.pcdn.co/wp-content/uploads/2014/03/ubuntu-logo.png",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/unity"
    },
    {
        name: "Unity Extra",
        desc: "Installs Unity along with common applications. (Approx. 1100MB)",
        size: 1100,
        flag: "unity-desktop",
        type: "desktop-extra",
        reqs: ["unity"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/unity-desktop"
    },
    {
        name: "X11",
        desc: "X11 via autodetected backend. Does not install any desktop environment.",
        flag: "x11",
        type: "essential",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/x11"
    },
    {
        name: "XFCE4",
        desc: "Installs the Xfce desktop environment. (Approx. 250MB)",
        size: 250,
        flag: "xfce",
        type: "desktop",
        reqs: ["gtk-extra"],
        tips: ["You can start Xfce via the startxfce4 host command: sudo startxfce4"],
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Xfce_logo.svg/1024px-Xfce_logo.svg.png",
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/xfce"
    },
    {
        name: "XFCE4 Extra",
        desc: "Installs Xfce along with common applications. (Approx. 1200MB)",
        flag: "xfce-desktop",
        type: "desktop-extra",
        reqs: ["xfce"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/xfce-desktop"
    },
    {
        name: "XIWI",
        desc: "X.org X11 backend running unaccelerated in a Chromium OS window.",
        flag: "xiwi",
        type: "display",
        reqs: ["audio", "extension"],
        tips: ["You can open your running chroot desktops by clicking on the extension icon. Once in a crouton window, press fullscreen or the \"switch window\" key to switch back to Chromium OS.",
            "You can launch individual apps in crouton windows by using the \"xiwi\" command in the chroot shell. Use startxiwi to launch directly from the host shell. Use the startxiwi parameter -b to run in the background. Example: sudo startxiwi -b xterm"],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/xiwi"
    },
    {
        name: "X.Org",
        desc: "X.Org X11 backend. Enables GPU acceleration on supported platforms.",
        flag: "xorg",
        type: "display",
        reqs: ["audio"],
        tips: ["You can flip through your running chroot desktops and Chromium OS by hitting Ctrl+Alt+Shift+Back and Ctrl+Alt+Shift+Forward."],
        bash: "https://github.com/dnschneid/crouton/blob/master/targets/xorg"
    }
]