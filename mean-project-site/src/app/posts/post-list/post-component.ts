import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})
export class PostListComponent {
   // posts = [
    // {title: 'First Content', content: 'This is the first post\'s post' },
    // {title: 'Second Content', content: 'This is the first post\'s post' },
    // {title: 'Third Content', content: 'This is the first post\'s post' },
  // ];
  @Input() posts: Post[] = [];
}
