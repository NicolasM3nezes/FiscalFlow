import { workMotorService } from "../../erp/workmotor/workmotor.service";

class OpenWorkMotor {
  async execute() {
    return await workMotorService.open();
  }
}

export const openWorkMotor = new OpenWorkMotor();