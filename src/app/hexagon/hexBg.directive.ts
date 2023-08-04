import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:"[hex-bg]",
    host:{
        'class': 'hexagon'
    }
})

/*Directive Goals
1. Know when hexagon is full or empty
2. If Empty be gray
3. If full be the champ icon
 */
export class HexBgDirective{
    el!: ElementRef
    current: any = "";

    constructor(el: ElementRef) {
        this.el = el;
    }
  
  
    @HostListener('dragover', ['$event']) onDragOver(evt:any) {
        evt.preventDefault()
        // console.log(evt.dataTransfer.dropEffect)
    }

    @HostListener('dragend', ['$event']) onDragEnd(evt:any) {
        evt.preventDefault()
        // console.log(evt.dataTransfer.dropEffect)
        if(evt.dataTransfer.dropEffect === 'none'){
            this.el.nativeElement.style.background = 'yellow';
        }

    }
  
    @HostListener('dragleave', ['$event']) public onDragLeave(evt:any) {
        evt.preventDefault()
        // console.log(evt.dataTransfer.dropEffect)
        if(evt.srcElement.childElementCount < 1){
            this.el.nativeElement.style.background = '';

        }
        console.log(evt.srcElement.childElementCount)
        
    }
  
    @HostListener('drop', ['$event']) public ondrop(evt:any) {
        evt.preventDefault()
        this.el.nativeElement.style.background = 'yellow';
    }
}