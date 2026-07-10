import { Browser, BrowserContext, chromium, Page } from "playwright";

class BrowserManager {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  private page: Page | null = null;

  async launch(): Promise<Page> {
    if (this.page) {
      return this.page;
    }

    this.browser = await chromium.launch({
      headless: false,
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

    return this.page;
  }

  getPage(): Page {
    if (!this.page) {
      throw new Error("O navegador ainda não foi iniciado.");
    }

    return this.page;
  }

  isOpen(): boolean {
    return this.browser !== null;
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }

    this.browser = null;
    this.context = null;
    this.page = null;
  }
}

export const browserManager = new BrowserManager();