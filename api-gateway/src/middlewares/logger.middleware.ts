// src/middleware/logger.middleware.ts
import { logger } from 'src/configs';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || '';

    // Log request
    logger.info(`Incoming ${method} ${originalUrl}`, {
      context: 'HTTP',
      ip,
      userAgent,
      body: req.body,
      params: req.params,
      query: req.query,
    });

    // Track response time
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      logger.log(
        res.statusCode >= 400 ? 'error' : 'info',
        `${method} ${originalUrl} ${res.statusCode} - ${duration}ms`,
        {
          context: 'HTTP',
        },
      );
    });

    next();
  }
}
