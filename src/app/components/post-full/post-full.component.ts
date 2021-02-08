import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-full',
  templateUrl: './post-full.component.html',
  styleUrls: ['./post-full.component.css']
})
export class PostFullComponent implements OnInit {
  @Input()
  post: IPost;

  constructor() {
  }

  ngOnInit(): void {
  }

}
