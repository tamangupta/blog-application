import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

//for redirection
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  
  public currentBlog;
  possibleCategories = ["Comedy","Humour","Drama","Technology","Action"];

  constructor(public blogHttpService: BlogHttpService,private _route:ActivatedRoute,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    console.log("blog-edit onInit called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    // this.currentBlog = this.blogHttpService.getDetailsOfCurrentBlog(myBlogId);
    this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log("Logging data");
        console.log(data);
        //data[<key of json coming>]
        this.currentBlog = data["data"];
        console.log(this.currentBlog);
      },
      error =>{
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }
  public editBlog(): any{
    this.blogHttpService.editBlog(this.currentBlog,this.currentBlog.blogId).subscribe(
      data =>{
        console.log("Blog edited successfully")
        this.toastr.success('Blog edited successfully', 'Success');
        setTimeout(() =>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        },1000);
        
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }


}
