import { PromService } from '@digikare/nestjs-prom';
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { Gauge } from 'prom-client';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  private readonly healthGauge: Gauge<string>;

  constructor(
    private readonly healthService: HealthService,
    private readonly promService: PromService,
  ) {
    this.healthGauge = this.promService.getGauge({ name: 'health' });
    this.healthGauge.set(1);
  }

  @Get('/')
  async health(@Res() res: Response) {
    const health = await this.healthService.check();

    const healthMetric = Number(health.status === 'ok');

    this.healthGauge.set(healthMetric);

    return res.status(health.status === 'ok' ? 200 : 500).json(health);
  }
}
