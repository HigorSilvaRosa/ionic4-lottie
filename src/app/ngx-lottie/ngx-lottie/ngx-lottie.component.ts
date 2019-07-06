import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import * as LottieWeb from 'lottie-web';

@Component({
  selector: 'ngx-lottie',
  templateUrl: './ngx-lottie.component.html',
  styleUrls: ['./ngx-lottie.component.scss'],
})
export class NgxLottieComponent implements OnChanges {


  @ViewChild("lottie") lottieDiv: ElementRef;

  @Input() renderer: "svg" | "canvas" | "html" = "svg";
  @Input() loop: boolean = true;
  @Input() autoplay: boolean = true;
  @Input() path: string;

  animation: LottieWeb.AnimationItem

  constructor() { }

  ngOnChanges(): void {
    if (this.animation) {
      this.animation.destroy();
      this.animation = null;
    }
    this.animation = LottieWeb.default.loadAnimation({
      container: this.lottieDiv.nativeElement,
      renderer: this.renderer,
      loop: this.loop,
      autoplay: this.autoplay,
      path: this.path
    });
  }

}
