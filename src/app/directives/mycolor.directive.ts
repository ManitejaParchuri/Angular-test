import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor!:string

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {
    this.color = 'red'

   }

   @HostListener('mouseover') onMouseOver(){
     this.color ='purple'
     this.bgcolor = 'skyblue'

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.color ='Red'
    this.bgcolor = 'lightblue'

  }
}
