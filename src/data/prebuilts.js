module.exports =  [
    {
        name: "Ubuntu 16.04 - CLI Only",
        desc: "Ubuntu with no desktop or desktop applications",
        options: ["xenial", "keyboard,extension,core,cli-extra"],
        img: "https://149366088.v2.pressablecdn.com/wp-content/uploads/2016/11/neofetch-ubuntu-750x402.jpg"

    },
    {
        name: "Ubuntu 16.04 - Desktop Apps",
        desc: "Ubuntu with the ability to run desktop apps using xiwi",
        options: ["xenial", "keyboard,extension,core,cli-extra,audio,xiwi,"],
        img: "https://www.ubuntufree.com/wp-content/uploads/2017/10/Ubuntu-17-10-desktop-apps-1.jpg"
    },
    {
        name: "Ubuntu 16.04 - Full Install",
        desc: "Ubuntu, Unity, and several gnome applications.",
        options: ["xenial", "keyboard,extension,core,cli-extra,audio,xiwi,unity,unity-desktop"],
        img: "https://news-cdn.softpedia.com/images/news2/ubuntu-17-10-is-getting-volume-improvements-more-gnome-apps-ported-as-snaps-517218-2.jpg"
    }
]