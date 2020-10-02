import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  getAttribute(key: string) {
    return localStorage.getItem(key)
  }
  setAttribute(key: string, value: string) {
    localStorage.setItem(key, value)
  }
  clearStorage() {
    localStorage.clear()
  }
}
