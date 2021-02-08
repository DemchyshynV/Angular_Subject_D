import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IPost} from '../../interfaces';
import {ActivePostService} from "../../services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;
  @Output()
  postUp = new EventEmitter<IPost>();

  active: number;

  constructor(private activePostService: ActivePostService) {
  }

  ngOnInit(): void {
    this.activePostService.getId().subscribe(value => this.active = value)
  }

  getInfo(): void {
    this.postUp.emit(this.post)
    this.activePostService.setId(this.post.id)
  }
}
