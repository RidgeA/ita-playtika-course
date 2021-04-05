import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { readFile, writeFile } from 'fs/promises';
import { Storage } from './storage.interface'

@Injectable()
export class FileStorage implements Storage {
  private readonly path: string

  constructor(config: ConfigService) {
    this.path = config.get<string>('FILESTORE_PATH');
  }

  async get<T>(): Promise<T[]> {
    const content = await readFile(this.path, { encoding: 'utf8' });
    return JSON.parse(content);
  }

  async store<T>(data: T): Promise<void> {
    const content = JSON.stringify(data, null, 2);
    await writeFile(this.path, content);
  }
}
