import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    @Input() createdAt: number;
    @Input() loveIts: number;

    constructor()
    {
      this.createdAt = Date.now();
      this.loveIts = 0;
    }

    ngOnInit() {
    }

    getTitle()
      {
        return this.title;
      }
      getContent()
      {
        return this.content;
      }
      getLoveIts()
      {
        return this.loveIts;
      }
      getCreatedAt()
      {
        return this.createdAt;
      }

      onIncreaseLoveIts()
      {
        this.loveIts = this.loveIts + 1;
      }
      onDecreaseLoveIts()
      {
        this.loveIts = this.loveIts - 1;
      }
}
