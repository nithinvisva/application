import { Attribute, Directive } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appCheckPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CheckPasswordDirective, multi: true }]
})
export class CheckPasswordDirective implements Validator {
  constructor(@Attribute('appCheckPassword') public PasswordControl: string) { }  
  
  validate(control: FormControl) {  
  
    const Password = control.root.get(this.PasswordControl);  
    const ConfirmPassword = control;  
  
    if (ConfirmPassword.value === null) {  
      return null;  
    }  
  
    if (Password) {  
      const subscription: Subscription = Password.valueChanges.subscribe(() => {  
        ConfirmPassword.updateValueAndValidity();  
        subscription.unsubscribe();  
      });  
    }  
    return Password && Password.value !== ConfirmPassword.value ? { passwordMatchError: true } : null;  
  }  
}
