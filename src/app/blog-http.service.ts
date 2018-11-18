import { Injectable } from '@angular/core';
//importing http client yo make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



//import observable related code
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public blogData;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1';
  public apiKey ='NjFhNTVlOWM5OTg2ZjA4NjNmZjY4ZWY0M2Q1N2U4Y2UzNGQ3OWY2OTIyZjM0NGQ3MTE4NWI2NjQ0MGFmMGJkNzRhYzhlODVkMDVlMmI0ZGE3YWNjM2IzZWYxMmNjNzljNGI2YTRmNzgxY2VkYTcyZDMzMWVhYjNjY2YzMGRhYjg3MA==';

  constructor(private _http: HttpClient) {
    console.log("blog http service is called ");

  }

  //exception handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle  error htttp calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return the blog
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/blogs/all?authToken='+this.apiKey);
    console.log(myResponse);
    return myResponse;

  }

  /**
     *method to  getSingleBlogInformation
     */
  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/blogs/view'+'/'+currentBlogId+ '?authToken=' +this.apiKey);
    return myResponse;
  }

  // method to create a blog

  public createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl+'/blogs/create'+'?authToken='+this.apiKey,blogData);
    return myResponse;
  }
  
  //method to delete a blog
  public deleteBlog(currentBlogId): any{
    let data = {};
    let myResponse = this._http.post(this.baseUrl+'/blogs/'+currentBlogId+'/delete?authToken='+this.apiKey,data);
    return myResponse;
  }
  //method for editing a blog 

  public editBlog(blogId,blogData): any {

    let myResponse = this._http.put(this.baseUrl+'/blogs/'+blogId+'/edit?authToken='+this.apiKey,blogData,blogId);
    return myResponse;
  }
}
