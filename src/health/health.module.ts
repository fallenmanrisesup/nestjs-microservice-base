import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  providers: [HealthService],
  controllers: [HealthController],
  exports: [HealthService],
})
export class HealthModule {}
