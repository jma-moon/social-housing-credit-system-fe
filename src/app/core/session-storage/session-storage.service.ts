import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public setItem(key: string, item: any): void {
    sessionStorage.setItem(key, JSON.stringify(item));
  }

  public getItem(key: string): any {
    return JSON.parse(sessionStorage.getItem(key));
  }

  public removeItem(key: string): any {
    const removed = this.getItem(key);
    sessionStorage.removeItem(key);
    return removed;
  }

  public reset(): void {
    sessionStorage.clear();
  }

}
