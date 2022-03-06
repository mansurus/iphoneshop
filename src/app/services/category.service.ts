import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError, catchError } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/categories";


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
