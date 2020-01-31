import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [1].map(() => `http://i3.ytimg.com/vi/fAhc2pBo9NA/maxresdefault.jpg`);
  images1 = [2].map(() => `http://i3.ytimg.com/vi/7i63YUbAGcM/maxresdefault.jpg`);
  images2 = [3].map(() => `http://i3.ytimg.com/vi/vm0E1HUm--4/maxresdefault.jpg`);
  images3 = [4].map(() => `http://i3.ytimg.com/vi/Qs-XcmaxaLw/maxresdefault.jpg`);
  images4 = [5].map(() => `http://i3.ytimg.com/vi/JlhEbNdog5w/maxresdefault.jpg`);


  constructor() { }

  ngOnInit() {
  }

}
