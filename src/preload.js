// Preload script
window.addEventListener('DOMContentLoaded', () => {
  console.log('Electron + React app loaded!');
  
  // Expose ipcRenderer to React
  window.ipcRenderer = require('electron').ipcRenderer;
});