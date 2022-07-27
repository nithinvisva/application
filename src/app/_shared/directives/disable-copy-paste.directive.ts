import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2 } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[appDisableCopyPaste]'
})
export class DisableCopyPasteDirective {
  _=_;
  @HostBinding('ngModel') ngModel!: string;
  @Output() warning: EventEmitter<string> = new EventEmitter();
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('paste',['$event'])
  keyEvent(event: ClipboardEvent) {
    if (event.clipboardData){
      event.preventDefault();
      this.warning.emit("Cannot copy and paste here !!")
      // this.renderer.setAttribute(this.el.nativeElement, 'title', 'Cannot copy and paste here !!');
    }
  }

}
