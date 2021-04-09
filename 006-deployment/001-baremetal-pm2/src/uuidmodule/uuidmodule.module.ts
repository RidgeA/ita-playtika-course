import { Module } from '@nestjs/common';
import { UuidV4Service } from './uuid/uuid.service';

@Module({
  providers: [UuidV4Service],
  exports: [UuidV4Service]
})
export class UuidmoduleModule {
}
