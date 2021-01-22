import { Global, Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfig } from '@nestjs/config';
import app from './app';
import rmq from './rmq';

@Global()
@Module({
  imports: [
    NestConfig.forRoot({
      load: [app, rmq],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
