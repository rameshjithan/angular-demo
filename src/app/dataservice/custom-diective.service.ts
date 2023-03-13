import { Directive,ElementRef,OnInit,Renderer2,ViewChild } from '@angular/core';
@Directive({
  selector:'[appCustomStyle]'
})

export class CustomStyleDirective{
  @ViewChild('hello', { static: false }) divHello: ElementRef;
  constructor(private ele:ElementRef,private render:Renderer2){
    this.ele.nativeElement.style.backgroundColor ="orange"
  }
  ngOnInit(){
    //this.ele.nativeElement.style.backgroundColor ="orange"
    this.render.setStyle(this.ele.nativeElement,
      'border-left',
      '2px dashed olive'
    );
    this.render.setProperty(this.ele.nativeElement, 'alt', 'Cute alligator');
  }
  setStyle() {
    this.render.setStyle(this.divHello.nativeElement, 'color', 'blue');
  }
}