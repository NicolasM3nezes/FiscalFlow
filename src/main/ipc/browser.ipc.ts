import { ipcMain } from "electron";
import { browserManager } from "../automation/browser/browser-manager";

export function registerBrowserIpc() {
  ipcMain.handle("browser:open", async () => {
    try {
      await browserManager.launch();

      return {
        success: true,
        message: "Browser iniciado."
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Erro ao iniciar browser."
      };
    }
  });

  ipcMain.handle("browser:close", async () => {
    await browserManager.close();
  });

  ipcMain.handle("browser:is-open", () => {
    return browserManager.isOpen();
  });
}