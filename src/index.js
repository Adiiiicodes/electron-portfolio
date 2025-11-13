const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the index.html file that webpack generated
  mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
  
  // For debugging
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Form submission handler
ipcMain.on('contact-form-submit', (event, formData) => {
  console.log('Form submitted:', formData);
  setTimeout(() => {
    event.reply('contact-form-result', { success: true });
  }, 1000);
});