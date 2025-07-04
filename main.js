const {app, BrowserWindow } = require('electron');

const url = require('url');

function createMainWIndow() {
    const mainWindow = new BrowserWindow({
        title: 'My Electron App',
        width: 800,
        height: 600,
        
    });

    const startURL = url.format({
        pathname: 'index.html',
        protocol: 'file:',
        slashes: true
    })

    mainWindow.loadURL(startURL);

}

app.whenReady().then(createMainWIndow);