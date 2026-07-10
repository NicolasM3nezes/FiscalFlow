import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  openWorkMotor: () => ipcRenderer.invoke("browser:open-workmotor"),

  onMainProcessMessage: (callback: (message: string) => void) => {
    ipcRenderer.on("main-process-message", (_, message) => {
      callback(message);
    });
  },
});