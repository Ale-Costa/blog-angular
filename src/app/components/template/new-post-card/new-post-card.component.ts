import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPostFormComponent } from '../new-post-form/new-post-form.component';

@Component({
  selector: 'app-new-post-card',
  templateUrl: './new-post-card.component.html',
  styleUrls: ['./new-post-card.component.css']
})
export class NewPostCardComponent {
  constructor(private readonly matDialog: MatDialog){

  }
  newPost(){
    this.matDialog.open(NewPostFormComponent,{width: '35vw'})
  }
}
