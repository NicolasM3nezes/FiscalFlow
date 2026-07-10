import { browserManager } from "../../automation/browser/browser-manager";

class WorkMotorService {
  private readonly LOGIN_URL = "https://app.workmotor.app/client-login";

  async open() {
    const page = await browserManager.launch();

    await page.goto(this.LOGIN_URL, {
      waitUntil: "networkidle",
    });

    return page;
  }
}

export const workMotorService = new WorkMotorService();