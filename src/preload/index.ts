import { contextBridge, ipcRenderer } from "electron";

const fiscalFlow = {
  browser: {
    open: () => ipcRenderer.invoke("browser:open"),
    close: () => ipcRenderer.invoke("browser:close"),
    isOpen: () => ipcRenderer.invoke("browser:is-open"),
  },
};

contextBridge.exposeInMainWorld("fiscalFlow", fiscalFlow);