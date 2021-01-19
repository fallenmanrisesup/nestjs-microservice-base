import { Global, Module } from '@nestjs/common';
import { ConfigService, ConfigModule as NestConfig } from '@nestjs/config';
import app from './app';

@Global()
@Module({
  imports: [
    NestConfig.forRoot({
      load: [app],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
