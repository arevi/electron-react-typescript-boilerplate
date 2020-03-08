import { app, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow;

const renderwindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 500,
    center: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
};

app.on('ready', renderwindow);
