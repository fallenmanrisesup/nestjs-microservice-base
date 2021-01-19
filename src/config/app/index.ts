import { registerAs } from '@nestjs/config';
import { ConfigFactory } from '@nestjs/config/dist/interfaces';

export interface IAppConfigProps {
  port: number;
  envMode: string;
}

export default registerAs<ConfigFactory<IAppConfigProps>>('app', () => ({
  port: +process.env.PORT || 5500,
  envMode: process.env.NODE_ENV || 'development',
}));
