import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective implements OnInit{
  @Input("appCardHover") config={
    querySelector: 'p'
  };
  ngOnInit(){
    let element=this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(element,"borderRadius","10px");
  }
  @HostBinding("class.hover") isHovering:boolean=false;
  constructor(private el:ElementRef,private renderer:Renderer) {    
    //this.renderer.setElementStyle(this.el.nativeElement,"borderRadius","10px");
  }
  @HostListener("mouseover") onmouseover(){
    let element=this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(element,"backgroundColor","yellow");
    //this.renderer.setElementStyle(this.el.nativeElement,"backgroundColor","yellow");
    this.isHovering=true;
  }
  @HostListener("mouseout") onmouseout(){
    let element=this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(element,"backgroundColor","skyblue");
    //this.renderer.setElementStyle(this.el.nativeElement,"backgroundColor","skyblue");
    this.isHovering=false;
  }
}
