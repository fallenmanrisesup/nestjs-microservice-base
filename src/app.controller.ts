import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { name, version } from '../package.json';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  app() {
    const mode = this.config.get('app.envMode');
    return {
      name,
      version,
      mode,
      pid: process.pid,
    };
  }
}
