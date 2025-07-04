const {app, BrowserWindow } = require('electron');
const path = require('path');
const { start } = require('repl');
const url = require('url');

function createMainWIndow() {
    const mainWindow = new BrowserWindow({
        title: 'My Electron App',
        width: 800,
        height: 600,

        
    });


    mainWindow.webContents.openDevTools();
    const startURL = url.format({
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol: 'file:',
        slashes: true
    })

    mainWindow.loadURL('http://localhost:3000/');

}

app.whenReady().then(createMainWIndow);