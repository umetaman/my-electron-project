"use strict";
//必要なモジュール
var _a = require("electron"), app = _a.app, BrowserWindow = _a.BrowserWindow, electron = _a.electron, globalShortcut = _a.globalShortcut, Menu = _a.Menu, ipcMain = _a.ipcMain;
var path = require("path");
var MyApp = /** @class */ (function () {
    function MyApp(app) {
        var _this = this;
        this.app = app;
        this.mainWindow = null;
        app.on("ready", function () {
            _this.createWindow();
        });
    }
    MyApp.prototype.createWindow = function () {
        var _this = this;
        var _options = {
            width: 800,
            height: 500,
            webPreferences: {
                nodeIntegration: true
            }
        };
        this.mainWindow = new BrowserWindow(_options);
        this.mainWindow.loadFile("index.html");
        this.mainWindow.on("closed", function () {
            _this.mainWindow = null;
        });
    };
    return MyApp;
}());
var myApp = new MyApp(app);
