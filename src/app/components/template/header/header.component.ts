import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private readonly matDialog: MatDialog){}

  ngOnInit(): void {

  }

  about(){
    this.matDialog.open(AboutComponent,{width: '40vw'})
  }
}
