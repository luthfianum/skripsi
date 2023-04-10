import { Get, Route } from "tsoa";

interface PingResponse {
  uptime: number;
  message: string;
  date: Date;
}

@Route("ping")
export default class PingController {
  @Get()
  public async getMessage(): Promise<PingResponse> {
    return {
      uptime: process.uptime(),
      message: 'Ok',
      date: new Date()
    };
  }
}