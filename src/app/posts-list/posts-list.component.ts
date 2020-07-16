import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts;
  ngOnInit(): void{
    this.ongetPosts()
  }
  constructor(private PostsService: PostsService) {}

  ongetPosts() {
    this.PostsService.getPosts().subscribe((res) => {
      this.posts = res;
      console.log(this.posts)
    });
  }

}
