import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable()
export class StorageService {
  private _storage: Storage | null = null;
  public initing: Promise<void> | null

  constructor(private storage: Storage) {
    this.initing = this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any) {
    if (!this._storage) {
      await this.initing
    }
    if (!this._storage) throw new Error('expected storage to be initialised by now')
    await this._storage.set(key, value);
  }

  public async get(key: string) {
    if (!this._storage) {
      await this.initing
    }
    if (!this._storage) throw new Error('expected storage to be initialised by now')
    return await this._storage.get(key)
  }
}
