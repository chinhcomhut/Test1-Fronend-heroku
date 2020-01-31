import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-list-singer',
  templateUrl: './carousel-list-singer.component.html',
  styleUrls: ['./carousel-list-singer.component.css']
})
export class CarouselListSingerComponent implements OnInit {

  images = [1].map(() => `http://i3.ytimg.com/vi/AtBNDsPkq40/maxresdefault.jpg`);
  images1 = [2].map(() => `http://i3.ytimg.com/vi/4uAXzzMVrPk/maxresdefault.jpg`);
  images2 = [3].map(() => `http://i3.ytimg.com/vi/9cPJLlNwO-w/maxresdefault.jpg`);

  constructor() {
  }

  ngOnInit() {
  }

}
