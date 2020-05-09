const { app, BrowserWindow } = require('electron')

       function createWindow () {

            let win = new BrowserWindow({ 
           
            width: 1000,
            height: 800,
            
            autoHideMenuBar: true,
           
            }) 

           
            
            win.loadFile('index.html')
           




            
    }
    
app.whenReady().then(createWindow)