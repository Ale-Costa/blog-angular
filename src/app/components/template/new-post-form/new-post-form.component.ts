import { NewPostActionsComponent } from './../new-post-actions/new-post-actions.component';
import { Component, OnInit, Inject } from '@angular/core';
import { Post } from './new-post.model';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {

  disabled = true
  post: Post = {
    id:'',
    user:'',
    title: '',
    postContent: ''
  }

  constructor(private readonly matDialog: MatDialog,
    private readonly matDialogRef: MatDialogRef<NewPostFormComponent>,
    private readonly postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data:Post) { }

  ngOnInit() {
    if(this.data){

      this.post = this.data
    }
  }

  salvar(){
    console.log(this.post)
    !!this.post.id?
    this.editar():this.adicionar()
  }



  private adicionar(){
    this.postService.newPost(this.post).pipe(take(1)).subscribe({next: ()=> {
      this.matDialog.closeAll()
      this.postService.showMessage('New post added')
      setTimeout(()=>{
        window.location.reload()
      },1000)
    }})
  }

  private editar(){
    this.postService.updatePost(this.post).pipe(take(1)).subscribe({next: ()=> {
      this.matDialog.closeAll()
      this.postService.showMessage('Post updated')
      setTimeout(()=>{
        window.location.reload()
      },1000)
    }})
  }

  cancel(){
    if (this.post.postContent){
      this.matDialog.open(NewPostActionsComponent)
    }else{
      this.matDialogRef.close()
    }
  }

}
