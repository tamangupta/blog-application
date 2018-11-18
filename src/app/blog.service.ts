import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2018-10-14T12:20:47.845Z",
      "created": "2018-10-14T12:20:47.845Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is a blog body",
      "desription": "this is blog1 description",
      "title": "This is Blog 1 "

    },
    {
      "blogId": "2",
      "lastModified": "2018-10-13T08:30:00.524Z",
      "created": "2018-10-10T02:37:45.765Z",
      "tags": [],
      "author": "Admin",
      "category": "Technology",
      "isPublished": true,
      "views": 1,
      "bodyHtml": "<h1>this is a blog body</h1>",
      "desription": "this is blog2 description",
      "title": "Advance Web "

    },
    {
      "blogId": "3",
      "lastModified": "2018-10-05T12:20:47.845Z",
      "created": "2018-10-01T10:30:27.652Z",
      "tags": [],
      "author": "Admin",
      "category": "",
      "isPublished": true,
      "views": 2,
      "bodyHtml": "this is a blog body",
      "desription": "this is blog3 description",
      "title": "This is Blog 3 "

    },
  ]

  public currentBlog;


  constructor() {
    console.log("service constructor is called")
  }

   //method to return the blog
   public getAllBlogs(): any {
    return this.getAllBlogs;
  }

  /**
     *method to  getSingleBlogInformation
     */
  public getSingleBlogInformation(currentBlogId): any {

    for (let blog of this.allBlogs) {

      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }


}
