import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.baseURL + 'posts/');
  }

  getpost(id: number) {
    return this.http.get(this.baseURL + 'posts/' + id );
  }

  deletePost(id: number) {
    return this.http.delete(this.baseURL + 'posts/' + id );
  }

  updatePost(id, post) {
    return this.http.put(this.baseURL + 'posts/' + id , post);
  }
}
