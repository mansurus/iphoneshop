import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Accessory } from '../accessories/accessory';
import { Observable, throwError, catchError } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class AccessoryService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/accessories";

  getAccessories():Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addAccessory(accessory:Accessory):Observable<Accessory> {

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
      
    }
    
    return this.http.post<Accessory>("http://localhost:3000/accessories", accessory, httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateAccessory(accessory:Accessory):Observable<Accessory> {

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
      
    }
    
    return this.http.patch<Accessory>("http://localhost:3000/accessories/"+accessory.id, accessory, httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deleteAccessory(accessoryId):Observable<any> {

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
      
    }
    
    return this.http.delete("http://localhost:3000/accessories/"+accessoryId, httpOptions).pipe(
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
