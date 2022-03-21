const {app,BrowserWindow} = require("electron")
const TabGroup = require("electron-tabs")

function createWindow(){
    const win = new BrowserWindow({
        width : 800,
        height : 600,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    })
    win.loadFile('src/index.html')
}

app.whenReady().then(()=> {
    createWindow()
    let tabGroup = new TabGroup()
    let tab = tabGroup.addTab({
        title: "Start",
        src: "http://electron.atom.io",
        visible: true
    })    
    app.on('activate', function(){
        if(BrowerWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function(){
    if(process.platform !== 'darwin') app.quit()
})


