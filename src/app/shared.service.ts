import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private data: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
  data$: Observable<any> = this.data.asObservable();
  private userId;

  constructor() { }

  setData(newData) {
    this.data.next(newData);
  }

  set userToEdit(userId) {
    this.userId = userId;
  }

  get userToEdit() {
    return this.userId;
  }

}