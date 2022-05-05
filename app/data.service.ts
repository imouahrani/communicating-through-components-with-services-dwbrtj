import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  constructor() { }

  public falseToTrue = new BehaviorSubject<boolean>(false);

  setBooleanToTrue(valueChange: boolean) {
    this.falseToTrue.next(valueChange);
  }

  getBooleanValue() {
    return this.falseToTrue.asObservable();
  }

}