import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// 10 requests per 60 seconds per IP
const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60,
});

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const ip =
      req.headers['x-forwarded-for']?.toString() ||
      req.socket.remoteAddress ||
      'unknown-ip';

    try {
      await rateLimiter.consume(ip);
      next();
    } catch {
      throw new BadRequestException('Rate limit exceeded');
    }
  }
}