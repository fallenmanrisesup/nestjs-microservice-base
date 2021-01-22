import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthModule } from './health/health.module';
import { ConfigModule } from './config/config.module';
import { PromModule } from '@digikare/nestjs-prom';
import { name, version } from '../package.json';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { GraphqlModule } from './graphql/graphql.module';
import { GqlConfigService } from './graphql/graphql-config.service';

@Module({
  imports: [
    PromModule.forRoot({
      withDefaultsMetrics: true,
      defaultLabels: {
        app: name,
        version,
      },
    }),
    GraphQLFederationModule.forRootAsync({
      useFactory: (cfg: GqlConfigService) => {
        return cfg.createGqlOptions();
      },
      imports: [GraphqlModule],
      inject: [GqlConfigService],
    }),
    HealthModule,
    ConfigModule,
    GraphqlModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
