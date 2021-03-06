const {app,BrowserWindow} = require("electron")
const TabGroup = require("electron-tabs")
const Path = require('path')

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
    app.on('activate', function(){
        if(BrowerWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function(){
    if(process.platform !== 'darwin') app.quit()
})


