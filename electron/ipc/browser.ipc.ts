import { ipcMain } from "electron";

import { openWorkMotor } from "../../src/application/browser/open-workmotor";
import { browserManager } from "../../src/automation/browser/browser-manager";

export function registerBrowserIpc() {
  ipcMain.handle("browser:open-workmotor", async () => {
    try {
      const result = await openWorkMotor.execute();

      return result;
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Erro ao abrir o WorkMotor.",
      };
    }
  });

  ipcMain.handle("browser:close", async () => {
    try {
      await browserManager.close();

      return {
        success: true,
        message: "Navegador fechado com sucesso.",
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Erro ao fechar o navegador.",
      };
    }
  });

  ipcMain.handle("browser:is-open", () => {
    return browserManager.isOpen();
  });
}