import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { HealthCheckResult, HealthIndicatorResult } from '@nestjs/terminus';
import { Health, HealthIndicator } from './dtos/health.dto';
import { HealthService } from './health.service';

@Resolver(() => Health)
export class HealthResolver {
  constructor(private readonly healthService: HealthService) {}
  @Query(() => Health)
  async userServiceHealth() {
    const healthResult = await this.healthService.check();

    console.log(healthResult);
    return healthResult;
  }

  @ResolveField()
  error(root: HealthCheckResult) {
    return this.mapDetails(root.error);
  }

  @ResolveField()
  info(root: HealthCheckResult) {
    return this.mapDetails(root.info);
  }

  @ResolveField()
  details(root: HealthIndicatorResult) {
    return this.mapDetails(root.details);
  }

  private mapDetails(indicator: HealthIndicatorResult): HealthIndicator[] {
    const result = Object.keys(indicator).map<HealthIndicator>(key => ({
      name: key,
      status: indicator[key].status,
      optionalKeys: [],
      //    Object.keys(indicator[key])
      //     .filter(x => x !== 'status')
      //     .map(x => ({ key: x, value: indicator[key][x] })),
    }));

    return result;
  }
}
