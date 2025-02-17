import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class GrpcLoggingInterceptor implements NestInterceptor {
    private readonly path;
    private readonly redactedFields;
    private readonly logger;
    constructor(path: string, redactedFields: string[]);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    private redact;
}
