// public/preload.js

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    readDirectory: async (path) => {
        return await ipcRenderer.invoke('read-directory', path);
    },
    readFile: async (path) => {
        return await ipcRenderer.invoke('read-file', path);
    },
});