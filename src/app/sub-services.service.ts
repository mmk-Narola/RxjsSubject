import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubServicesService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  public _firstSubject$ = new BehaviorSubject<any>([]);

  public _secondSubject$ = new BehaviorSubject<any>([]);

  public _thirdSubject$ = new BehaviorSubject<any>('');

  eventEmmit = new EventEmitter<any>();

  subjectCall() {
    return this.http.get(this.apiUrl).pipe(
      tap((data) => {
        this._firstSubject$.next(data);
        this._secondSubject$.next(data);
        this._thirdSubject$.next(data);
      })
    );
  }

  getTodosList() {
    let url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(url).pipe(shareReplay());
  }

  getSubjectData() {
    return this._thirdSubject$.asObservable();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
