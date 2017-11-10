import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { isBlank } from '@angular/core/src/facade/lang';
import { CustomValidator } from 'app/form-validators/custom-validator';



@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css']
})
export class FormValidatorsComponent implements OnInit {

  fg: FormGroup;

  //nameFormControl : AbstractControl;

  constructor(fb: FormBuilder) {
    //'Pedro' is the inital value for the FormGroup instance that is intended to capture the surname of the user
    var surnameFormControl = fb.control('Pedro', Validators.compose([CustomValidator.startsWithUpperCaseValidator]));

    //44 is the inital value for the control intended to capture the user's age
    var ageFormControl = fb.control(44, Validators.compose([Validators.required, CustomValidator.mustBeEven]));

    // 'name','age' and 'surname' are the actual control names that will be used in the binding to the template
    this.fg = fb.group({
      'name': ['', Validators.required],
      'age': ageFormControl,
      'surname': surnameFormControl
    })

    //interesting concept of subscription to the event emitted from the formGroup control
    this.fg.controls['name'].valueChanges.subscribe((nameValue: string) => {
      console.log("name changed to : " + nameValue);
    });

    this.fg.valueChanges.subscribe((formGroupValue: any) => {
      console.log("Form group value: ")
      console.log(formGroupValue);
      console.log(`this.fg.valid : ${this.fg.valid}`);
    });


  }


  isFormValid(): boolean {
    //returns true if the form is dirty and valid
    return (this.fg.dirty && this.fg.valid);
  }




  ngOnInit() {
  }

  OnFormSubmit(formValue: any) {
    console.log(formValue);
    // console.log("aaaaaaaaaaaaaaaaaaaaa")
    //this.fg.errors

    var someString: String;

    someString = formValue["surname"];
    var blank = isBlank(someString);



    console.log(blank);


    someString = null;

    console.log(isBlank(someString));


  }



  // startsWithUpperCaseValidator(fc:FormControl) : {[x:string] : boolean}
  // {
  //     var value = fc.value as string;

  //     if(isBlank(value) || value == ""){
  //         return { "startsWithUpperCase": true }
  //     }
  //     else
  //     {
  //         var firstCharacter = value.charAt(0);
  //         if (firstCharacter) 
  //         {
  //             let isItLetter = firstCharacter.toUpperCase() != firstCharacter.toLocaleLowerCase();
  //             if (isItLetter) {
  //                 let isUpperCaseLetter = firstCharacter == firstCharacter.toUpperCase();
  //                 if(!isUpperCaseLetter)
  //                 {
  //                     return { "startsWithUpperCase": true }
  //                 }
  //             }
  //             else
  //             {
  //                 return { "startsWithUpperCase": true }
  //             }
  //         }
  //         else
  //         {
  //             return { "startsWithUpperCase": true }
  //         }
  //     }
  //     return null;
  // }



}
