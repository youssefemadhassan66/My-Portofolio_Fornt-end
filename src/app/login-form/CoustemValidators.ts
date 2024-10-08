
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator{
    static passwordValidator() :ValidatorFn{
      return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      if(!password){
        return null;
      }
      const ValidPassword = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/.test(password);
      const passwordValid = ValidPassword;
      return !passwordValid ? {passwordStrength  : true} : null;
    }
  }
}
