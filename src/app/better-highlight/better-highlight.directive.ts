import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('AB') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private elref: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
    //  this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'blue');

    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(evenData: Event) {

    console.log(evenData)
    //  this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(evenData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }



}
