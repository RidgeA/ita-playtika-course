// export interface Storage {
//   get<T>():Promise<T[]>
//
//   store<T>(data: T[]): Promise<void>
// }

export class Storage {
  get<T>():Promise<T[]> {
    throw new Error('implement me');
  }

  store<T>(data: T[]): Promise<void>{
    throw new Error('implement me');
  }
}
