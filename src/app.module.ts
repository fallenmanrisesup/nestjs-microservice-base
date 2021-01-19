import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthModule } from './health/health.module';
import { ConfigModule } from './config/config.module';
import { PromModule } from '@digikare/nestjs-prom';
import { name, version } from '../package.json';

@Module({
  imports: [
    PromModule.forRoot({
      withDefaultsMetrics: true,
      defaultLabels: {
        app: name,
        version,
      },
    }),
    HealthModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
