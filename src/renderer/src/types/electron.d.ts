export {};

declare global {
  interface Window {
    fiscalFlow: {
      workmotor: {
        open(): Promise<{
          success: boolean;
          message: string;
        }>;
      };
    };
  }
}