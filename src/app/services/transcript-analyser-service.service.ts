import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranscriptAnalyserService {

  sensitivity: number
  sensitivityChangeEmitter: Subject<number> = new Subject<number>()


  constructor(
  ) { }

  setSensitivity(value: number) {
    this.sensitivity = value
    this.sensitivityChangeEmitter.next(value)
  }

  getSensitivity(): Subject<number> {
    return this.sensitivityChangeEmitter
  }
}
