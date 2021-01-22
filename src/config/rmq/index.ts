import { registerAs } from '@nestjs/config';
import { ConfigFactory } from '@nestjs/config/dist/interfaces';

export interface IRmqConfigProps {
  url: string;
  serviceQueueName: string;
  prefetchCount: number;
}

export default registerAs<ConfigFactory<IRmqConfigProps>>('rmq', () => ({
  url: process.env.RMQ_URL,
  serviceQueueName: process.env.RMQ_SERVICE_QUEUE_NAME || 'user-service',
  prefetchCount: +process.env.RMQ_SERVICE_PREFETCH || 100,
}));
