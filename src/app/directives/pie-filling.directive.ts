import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appPieFilling]'
})
export class PieFillingDirective implements OnChanges {

  @Input() fillingAmount: number

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    console.log(this.fillingAmount);
    this.el.nativeElement.setAttribute('style', `background: conic-gradient(
        #5A5A71 ${Math.floor(360 * this.fillingAmount / 100)}deg,
        rgba(0, 0, 0, 0.12) 0
      )`)
    }
}
