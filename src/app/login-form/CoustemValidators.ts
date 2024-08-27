
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator{
    static passwordValidator() :ValidatorFn{
      return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      if(!password){
        return null;
      }
      const ValidPassword = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/.test(password);
      const isValidLength = password.length >=8;
      const passwordValid = ValidPassword && isValidLength;
      return !passwordValid ? {passwordStrength  : true} : null;
    }
  }
}
