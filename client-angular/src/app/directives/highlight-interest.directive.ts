

import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightInterest]'
})
export class HighlightInterestDirective {

	constructor(private el: ElementRef) {
		// You can use this argument to highlight certain listings
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('gray');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}

