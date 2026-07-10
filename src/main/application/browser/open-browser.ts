import { browserManager } from "../../automation/browser/browser-manager";

class OpenBrowser {
  async execute() {
    try {
      await browserManager.launch();

      return {
        success: true,
        message: "Navegador iniciado com sucesso.",
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: "Erro ao iniciar o navegador.",
      };
    }
  }
}

export const openBrowser = new OpenBrowser();