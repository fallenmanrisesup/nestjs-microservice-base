import { IAppConfigProps } from './app';
import { IRmqConfigProps } from './rmq';

export interface IConfigProps {
  app: IAppConfigProps;
  rmq: IRmqConfigProps;
}
