import { Module } from '@nestjs/common';
import { GqlConfigService } from './graphql-config.service';

@Module({
  providers: [GqlConfigService],
  exports: [GqlConfigService],
})
export class GraphqlModule {}
