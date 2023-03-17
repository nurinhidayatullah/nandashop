import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
