import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-button',
  templateUrl: './posts-button.component.html',
  styleUrls: ['./posts-button.component.css']
})
export class PostsButtonComponent {
  liked = false
  unliked = false

  like(){
    this.liked = true
    this.unliked = false
  }

  unlike(){
    this.liked = false
    this.unliked = true
  }
}
