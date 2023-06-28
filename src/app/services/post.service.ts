import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Post } from '../components/template/new-post-form/new-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:3001/posts'

  constructor(private readonly http: HttpClient, private readonly matSnackBar:MatSnackBar) {

  }

  getPosts(){
    return this.http.get(this.baseUrl)
  }

  showMessage(msg:string, isError = false):void{
    this.matSnackBar.open(msg,'close',{duration:5000, horizontalPosition: 'right', verticalPosition:'top', panelClass: isError ? ['msg-error']: ['msg-success']})
  }
}
