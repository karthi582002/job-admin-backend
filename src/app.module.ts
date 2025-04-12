import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { ApiKeyMiddleware } from './common/middleware/api-key.middleware';
import { RateLimitMiddleware } from './common/middleware/rate-limit.middleware';

@Module({
  imports: [JobsModule],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(ApiKeyMiddleware,RateLimitMiddleware).forRoutes('*')
    }
}
