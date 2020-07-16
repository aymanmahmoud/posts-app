import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post;
  postId = this.route.snapshot.params['id'];
  modal = false;
  constructor(
    private postsServices: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.ongetPost();
  }

  ongetPost() {
    this.post = this.postsServices.getpost(this.postId).subscribe((res) => {
      this.post = res;
    });
    console.log(this.post);
  }

  onDeletePost() {
    this.postsServices.deletePost(this.postId).subscribe((res) => {
      console.log(res);
      this.showDeletedMessage()
    });
    
    this.router.navigate(['/posts']);
  }

  onSubmitform(value) {
    this.postsServices.updatePost(this.postId, value).subscribe((res) => {
      console.log(res);
      this.showUpdatedMessage();
    });
  }
  

  showUpdatedMessage() {
    this.toastr.success('Post Updated', 'Success');
    this.router.navigate(['/posts', this.postId]);
  }
  showDeletedMessage() {
    this.toastr.success('Post Deleted', 'Deleted');
  
  }
}
