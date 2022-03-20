const {app,BrowerWindow} = require("electron")

function createWindow(){
    const win = new BrowerWindow({
        width : 800,
        height : 600
    })
    win.loadFile('index.html')
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


