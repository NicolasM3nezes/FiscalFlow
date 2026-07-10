import { ipcMain } from "electron";
import { openWorkMotor } from "../application/workmotor/open-workmotor";

export function registerWorkMotorIpc() {
  ipcMain.handle("workmotor:open", async () => {
    return await openWorkMotor.execute();
  });
}