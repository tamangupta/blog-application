import { Component, OnInit, OnDestroy } from '@angular/core';

//imported route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers :[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  //empty object
  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router,public _blogService: BlogService, public blogHttpService:BlogHttpService, public toastr : ToastrService, private location : Location) {
    console.log("constructor is called");

  }

  ngOnInit() {
    console.log("ngOnInit is called")
    //getting the blogId from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log("loggingdata");
        console.log(data);
        this.currentBlog=data["data"];
  
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    console.log(this.currentBlog);

  }

  ngOnDestroy(){


  }

  public deleteThisBlog(): any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data);
        this.toastr.success('Blog deleted Succesfully', 'Success');
        setTimeout(() =>{
         // this.router.navigate(['/blog', data.data.blogId]); //also works but throws syntax error
          this.router.navigate(['/home']);
        },1000);
      },
      error =>{
        console.log("Error");
      }
    );
  } // end of the delete blog

  public goBackToPreviousPage() : any{
     this.location.back();
  }



  

}
