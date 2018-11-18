import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
//routing module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    //routermodule for root method to declare possible routes in application
    RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'blog/:blogId',component:BlogViewComponent},
    {path:'create',component:BlogCreateComponent},
    {path:'edit/:blogId',component:BlogEditComponent},
    {path:'**',component:NotFoundComponent}
  ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 