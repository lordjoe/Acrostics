
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs').promises;

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'public/preload.js'),
        },
    });

    mainWindow.loadURL('http://localhost:3000');

    ipcMain.handle('read-directory', async (_, dirPath) => {
        try {
            const files = await fs.readdir(dirPath);
            return files;
        } catch (error) {
            console.error('Error reading directory:', error);
            return [];
        }
    });

    ipcMain.handle('read-file', async (_, filePath) => {
        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            return fileContent;
        } catch (error) {
            console.error('Error reading file:', error);
            return '';
        }
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});