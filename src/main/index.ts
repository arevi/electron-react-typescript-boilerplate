import { app, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow;

const isDev: boolean = process.env.ELECTRON_ENV == 'dev';
const isMacOS: boolean = process.platform === 'darwin';

//Render main window w/ configuration settings
const renderWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 500,
    center: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev
    }
  });

  // Depending on the environment the frontend will either load from the react server or the static html file
  mainWindow.loadURL(isDev ? 'http://localhost:3000/' : './build/index.html');

  // Detect if devtools was somehow opened outside development and close it
  mainWindow.webContents.on('devtools-opened', () => {
    if (!isDev) mainWindow.webContents.closeDevTools();
  });
  
};

// Render the main window on app open
app.on('ready', renderWindow);

// Additional check to close app on macos
app.on('window-all-closed', () => !isMacOS && app.quit());

// Activate app if mainwindow isnt already opened
app.on('activate', () => !mainWindow && renderWindow());
