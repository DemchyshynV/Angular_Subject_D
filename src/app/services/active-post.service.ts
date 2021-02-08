import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivePostService {
  activePost = new BehaviorSubject<number>(null);

  constructor() {
  }

  getId(): Observable<number> {
    return this.activePost;
  }

  setId(id: number): void {
    this.activePost.next(id);
  }
}
