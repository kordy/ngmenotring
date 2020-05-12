import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[highlightByDate]'
})
export class HighlightByDateDirective {
  @Input('highlightByDate') date: number;

  private getClass() {

    const startDate = (new Date(this.date));
    const furtherDate = (new Date(startDate));
    furtherDate.setDate(furtherDate.getDate()+14);
    const currentTime = new Date();
    let className = ''
    if (currentTime >= startDate && furtherDate >= currentTime) className = 'isFresh';
    if (currentTime < startDate) className = 'isFurther';
    return className;
  }

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    const className = this.getClass();
    if (className) {
      this.el.nativeElement.classList.add(className);
    }
  }
}
