declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    RMQ_URL: string;
    RMQ_SERVICE_QUEUE_NAME: string;
    RMQ_SERVICE_PREFETCH: string;
  }
}
