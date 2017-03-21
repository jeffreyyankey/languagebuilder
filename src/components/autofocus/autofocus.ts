import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[autofocus]'
})

export class Autofocus {
	private loaded = false;
	constructor(private el: ElementRef, private renderer: Renderer)	{}

		ngAfterViewChecked() {
		if (!this.loaded) {
			this.loaded = true;
			setTimeout(() => {
			this.renderer.invokeElementMethod(
				this.el.nativeElement, 'focus', []);
			});
		}
	}
}
