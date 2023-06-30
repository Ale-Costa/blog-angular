import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Post } from '../components/template/new-post-form/new-post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:3001/posts'
  selectedPost: Post[]

  private postHandler:Post


  constructor(private readonly http: HttpClient, private readonly matSnackBar:MatSnackBar) {}

  getPost(): Post{
    return this.postHandler
  }

  setPost(post:Post): void{
    this.postHandler = post
  }


  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl)
  }

  showMessage(msg:string, isError = false):void{
    this.matSnackBar.open(msg,'close',{duration:5000, horizontalPosition: 'right', verticalPosition:'top', panelClass: isError ? ['msg-error']: ['msg-success']})
  }

  newPost(post: Post):Observable<Post>{
    return this.http.post<Post>(this.baseUrl, post)
  }

  deletePost(id: string):Observable<Post>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Post>(url)
  }

  updatePost(post:Post):Observable<Post>{
    const url = `${this.baseUrl}/${post.id}`
    return this.http.put<Post>(url, post)
  }
}
