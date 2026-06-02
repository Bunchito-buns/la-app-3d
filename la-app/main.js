const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // Esto es crucial para que Electron pueda leer los archivos dentro del paquete
      webSecurity: false 
    }
  });

  // Intentamos cargar el archivo desde el directorio de recursos
  win.loadFile(path.join(__dirname, 'index.html'));
  
  // Mantenemos esto por ahora para verificar que todo esté bien
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);