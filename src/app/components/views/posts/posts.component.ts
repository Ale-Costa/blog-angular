import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../template/new-post-form/new-post.model';
import { NewPostFormComponent } from '../../template/new-post-form/new-post-form.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$:Observable<Post[]>

  constructor(private readonly postService: PostService,
    private readonly matDialog: MatDialog){}

    ngOnInit(): void {
      this.posts$ = this.postService.getPosts()
    }

    delete(post:Post){
      this.postService.deletePost(post.id).subscribe({next:()=> {
        this.postService.showMessage('Post deleted')
        this.ngOnInit()
      }})
    }

    update(post:Post){
      this.matDialog.open(NewPostFormComponent,{data:post})
      this.postService.setPost(post)
    }
}
