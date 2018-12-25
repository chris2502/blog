import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';

  posts = [
                {
                  title: 'Mon premier post',
                  content: 'content1',
                  loveIts: 3,
                  createdAt: '2018-12-12 08:00:00'
                },
                {
                  title: 'Mon deuxième poste',
                  content: 'content2',
                  loveIts: -2,
                  createdAt: '2018-12-12 09:00:00'
                },
                {
                  title: 'Encore un poste',
                  content: 'content3',
                  loveIts: 2,
                  createdAt: '2018-12-12 18:00:00'
                },
              ]
}
