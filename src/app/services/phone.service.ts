import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Phone } from '../phones/phone';
import { Observable, throwError, catchError } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class PhoneService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/phones";

  getPhones():Observable<Phone[]> {
    return this.http.get<Phone[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addPhone(phone:Phone):Observable<Phone> {

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
      
    }
    
    return this.http.post<Phone>("http://localhost:3000/phones", phone, httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  updatePhone(phone:Phone):Observable<Phone> {

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
      
    }
    
    return this.http.patch<Phone>("http://localhost:3000/phones/"+phone.id, phone, httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deletePhone(phoneId):Observable<any> {

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
      
    }
    
    return this.http.delete("http://localhost:3000/phones/"+phoneId, httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  handleError(err: HttpErrorResponse) {
    let errorMessage="";
    if(err.error instanceof ErrorEvent) {
      errorMessage = "An error occured " + err.error.message
    } else {
      errorMessage = "An error occured in the server"
    }
    return throwError(errorMessage);
  }


}
