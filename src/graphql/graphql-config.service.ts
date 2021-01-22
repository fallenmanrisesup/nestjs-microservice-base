import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  public createGqlOptions(): Partial<GqlModuleOptions> {
    const playgroundEnabled = this.configService.get<boolean>(
      'app.playgroundEnabled',
    );

    return {
      context: context => context,
      playground: playgroundEnabled,
      introspection: playgroundEnabled,
      autoSchemaFile: true,
    };
  }
}
