import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid'

@Injectable()
export class UuidV4Service {
  get(): string {
    return v4()
  }
}
