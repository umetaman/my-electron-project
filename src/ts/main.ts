//必要なモジュール
const { 
    app,
    BrowserWindow,
    electron,
    globalShortcut,
    Menu,
    ipcMain
} = require("electron");

const path = require("path");

class MyApp{

    mainWindow: Electron.BrowserWindow = null;

    constructor(public app: Electron.App){
        app.on("ready", () => {
            this.createWindow();
        });
    }

    private createWindow(){
        let _options = {
            width: 800,
            height: 500,
            webPreferences: {
                nodeIntegration: true
            }
        };

        this.mainWindow = new BrowserWindow(_options);
        this.mainWindow.loadFile("index.html");
        this.mainWindow.on("closed", () => {
            this.mainWindow = null;
        })
    }
}

const myApp = new MyApp(app);