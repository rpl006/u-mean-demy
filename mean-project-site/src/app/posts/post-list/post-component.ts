import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})
export class PostListComponent {
  posts = [
    {title: 'First Content', content: 'This is the first post\'s post' },
    {title: 'Second Content', content: 'This is the first post\'s post' },
    {title: 'Third Content', content: 'This is the first post\'s post' },
  ];
}
