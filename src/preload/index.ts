import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("fiscalFlow", {
  workmotor: {
    open: () => ipcRenderer.invoke("workmotor:open"),
  },
});