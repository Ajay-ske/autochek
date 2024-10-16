import { Global, Module } from '@nestjs/common';
import { ErrorHandlerService } from './services/error-handler.service';

@Global()
@Module({
  providers: [ErrorHandlerService],
  exports: [ErrorHandlerService],
})
export class SharedModule {}
