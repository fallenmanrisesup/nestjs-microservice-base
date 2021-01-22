import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthResolver } from './health.resolver';

@Module({
  imports: [TerminusModule],
  providers: [HealthService, HealthResolver],
  controllers: [HealthController],
  exports: [HealthService],
})
export class HealthModule {}
