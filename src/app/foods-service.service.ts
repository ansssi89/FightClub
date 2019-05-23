import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from '../app/food';
import { Appfeedback} from '../app/appfeedback'
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Fight } from 'src/app/fight'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FoodsServiceService {

  foodsUrl: string = 'http://limitless-sands-63856.herokuapp.com/foods'
  fightUrl: string = 'http://limitless-sands-63856.herokuapp.com/fights'
  feedbackUrl: string = 'http://limitless-sands-63856.herokuapp.com/feedback'
  message:string
  username:string
  winner: string

  constructor(private http: HttpClient) {

  }

  // Downloads feedbacks from the backend, used in appfeedback component

  getFeedback(): Observable<Appfeedback[]> {
    return this.http.get<Appfeedback[]>(this.feedbackUrl)
      .pipe(
        tap(_=> console.log('getti lähti')))
  }

  // Sends the feedback to backend, used in appfeedback component

  sendFeedback(message:string, username:string){
    return this.http.post<Appfeedback>('http://limitless-sands-63856.herokuapp.com/feedback', {
      message: message,
      username: username
    })

  }

  deleteFeedback(feedback: Appfeedback): Observable<Appfeedback>{
    const id = typeof feedback === 'number' ? feedback: feedback.id;
    const url = `http://limitless-sands-63856.herokuapp.com/feedback/${id}`;
    
    return this.http.delete<Appfeedback>(url, httpOptions).pipe(
      tap(_ => console.log('deleted'))
    )
  }

  sendFood(name:Food, emoji:string){
    return this.http.post<Appfeedback>('http://limitless-sands-63856.herokuapp.com/foods', {
     name: name,
      emoji: emoji
    })

  }

  // Downloads categories, used in fighcomponent

  getFoods() {
    return this.http.get<Food>(this.foodsUrl)
      .pipe(retry(3), catchError(this.handleError))
  }

  deleteFood(d:Food): Observable<Food>{
    const id = typeof d === 'number' ? d: d.id;
    return this.http.delete<Food>(`http://limitless-sands-63856.herokuapp.com/foods/${id}`)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // Downloads the number of category downloads from the backend, used in home component

  getFightCount() {
    return this.http.get<Fight>(this.fightUrl)
      .pipe(retry(3), catchError(this.handleError))
  }


}