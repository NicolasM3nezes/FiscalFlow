export {};

declare global {
  interface Window {
    fiscalFlow: {
      browser: {
        open(): Promise<{
          success: boolean;
          message: string;
        }>;

        close(): Promise<void>;

        isOpen(): Promise<boolean>;
      };
    };
  }
}