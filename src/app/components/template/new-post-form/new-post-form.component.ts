import { NewPostActionsComponent } from './../new-post-actions/new-post-actions.component';
import { Component, OnInit } from '@angular/core';
import { Post } from './new-post.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';

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
    private readonly postService: PostService) { }

  ngOnInit() {
  }

  publish(){
    this.postService.newPost(this.post).subscribe({next: ()=> {
      this.matDialog.closeAll()
      this.postService.showMessage('New post added')
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
