import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NewPostCardComponent } from './components/template/new-post-card/new-post-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewPostFormComponent } from './components/template/new-post-form/new-post-form.component';
import { FormsModule } from '@angular/forms';
import { NewPostActionsComponent } from './components/template/new-post-actions/new-post-actions.component';
import { PostsComponent } from './components/views/posts/posts.component';
import { PostsButtonComponent } from './components/views/posts/posts-button/posts-button.component';
import { AboutComponent } from './components/template/about/about.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavInfoComponent } from './components/template/sidenav-info/sidenav-info.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostCardComponent,
    NewPostFormComponent,
    NewPostActionsComponent,
    PostsComponent,
    PostsButtonComponent,
    AboutComponent,
    SidenavInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
