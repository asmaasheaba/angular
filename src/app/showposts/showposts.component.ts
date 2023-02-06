import { Component } from '@angular/core';
import postsData from '../posts.json';
import { Post } from './ipost';

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent {
 public posts:Array<Post>=postsData;

 //public posts : Post[] = postsData ;
  constructor(){}
}
