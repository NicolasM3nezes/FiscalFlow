"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electron", {
  openWorkMotor: () => electron.ipcRenderer.invoke("browser:open-workmotor"),
  onMainProcessMessage: (callback) => {
    electron.ipcRenderer.on("main-process-message", (_, message) => {
      callback(message);
    });
  }
});
