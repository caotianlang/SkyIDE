const TabGroup = require("electron-tabs")
let tabGroup = new TabGroup()
    let tab = tabGroup.addTab({
        title: "Start",
        src: "http://electron.atom.io",
        visible: true
})