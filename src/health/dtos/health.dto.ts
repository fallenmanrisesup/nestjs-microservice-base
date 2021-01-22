import { Field, ObjectType } from '@nestjs/graphql';
import { HealthIndicatorResult } from '@nestjs/terminus';

@ObjectType()
export class OptionalKey {
  @Field()
  key: string;
  @Field()
  value: string;
}

@ObjectType()
export class HealthIndicator {
  @Field()
  name: string;
  @Field()
  status: string;

  @Field(() => [OptionalKey])
  optionalKeys: OptionalKey[];
}

@ObjectType()
export class Health {
  @Field()
  status: string;

  @Field(() => [HealthIndicator])
  info: HealthIndicator[];

  @Field(() => [HealthIndicator])
  error: HealthIndicator[];

  @Field(() => [HealthIndicator])
  details: HealthIndicator[];
}
