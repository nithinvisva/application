import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { specialCharactersArray } from '../constants';
import * as _ from 'lodash';


@Directive({
  selector: '[appSpecialCharacter]'
})
export class SpecialCharacterDirective {
  _=_;
  @Output() warning: EventEmitter<string> = new EventEmitter();
  

  constructor(private el: ElementRef) {
  }

  @HostListener('keypress',['$event'])
  keyEvent(event: KeyboardEvent) {
    if(_.includes(specialCharactersArray, event.key)){
      event.preventDefault();
      (this.el.nativeElement as HTMLInputElement).value=_.replace((this.el.nativeElement as HTMLInputElement).value, event.key, '');
      this.warning.emit("special characters not allowed!!")
    }
  }
}
