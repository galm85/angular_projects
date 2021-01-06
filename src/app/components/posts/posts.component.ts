import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts=[];



  constructor() { }

     addPost(name,title,post){
     let newPost = {name:name.value,title:title.value,post:post.value}
     this.posts.push(newPost);
     name.value='';
     title.value='';
     post.value='';


  }


  ngOnInit(): void {
  }

}
