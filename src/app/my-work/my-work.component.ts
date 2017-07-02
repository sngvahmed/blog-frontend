import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  public type: string = 'component';

  public config: SwiperConfigInterface = {
    scrollbar: null,
    direction: 'vertical',
    slidesPerView: 1,
    scrollbarHide: false,
    keyboardControl: true,
    mousewheelControl: true,
    scrollbarDraggable: true,
    scrollbarSnapOnRelease: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  };

  @ViewChild(SwiperComponent) swiperView: SwiperComponent;

  toggleType() {
    this.type = this.type == 'component' ? 'directive' : 'component';
  }

  toggleDirection(): boolean {
    this.config.direction = (this.config.direction == 'horizontal') ? 'vertical' : 'horizontal';

    return false;
  }

  toggleAutoHeight() {
    this.config.autoHeight = !this.config.autoHeight;
  }

  toggleSlidesPerView() {
    if (this.config.slidesPerView != 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = +this.config.slidesPerView + 1;
    }
  }

  toggleOverlayControls() {
    if (this.config.pagination) {
      this.config.scrollbar = '.swiper-scrollbar';
      this.config.pagination = null;
      this.config.nextButton = null;
      this.config.prevButton = null;
    } else if (this.config.scrollbar) {
      this.config.scrollbar = null;
    } else {
      this.config.pagination = '.swiper-pagination';
      this.config.nextButton = '.swiper-button-next';
      this.config.prevButton = '.swiper-button-prev';
    }
  }

  toggleKeyboardControl() {
    this.config.keyboardControl = !this.config.keyboardControl;
  }

  toggleMouseWheelControl() {
    this.config.mousewheelControl = !this.config.mousewheelControl;
  }

  onReachEnd(event: any) {
    console.log('Swiper at the end!');
  }

  onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }

}
