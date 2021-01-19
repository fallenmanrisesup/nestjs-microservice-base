import { Injectable } from '@nestjs/common';
import {
  DNSHealthIndicator,
  HealthCheckResult,
  HealthCheckService,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Injectable()
export class HealthService {
  constructor(
    private health: HealthCheckService,
    private readonly dns: DNSHealthIndicator,
    private readonly memory: MemoryHealthIndicator,
  ) {}

  async check(): Promise<HealthCheckResult> {
    const health = await this.health.check([
      async () => this.dns.pingCheck('internet_allowed', 'https://google.com'),
      async () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
    ]);

    const isUp = Object.values(health.info).every(x => x.status === 'up');

    health.status = isUp ? 'ok' : 'error';

    return health;
  }
}
