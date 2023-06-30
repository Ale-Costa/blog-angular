import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post-actions',
  templateUrl: './new-post-actions.component.html',
  styleUrls: ['./new-post-actions.component.css']
})
export class NewPostActionsComponent {

  constructor(private readonly matDialog: MatDialog,
    private readonly matDialogRef: MatDialogRef<NewPostActionsComponent>,
    private readonly postService: PostService) { }


    discard(){
      this.matDialog.closeAll()
      this.postService.showMessage('Changes discard!')
    }

    back(){
      this.matDialogRef.close()
    }
}
