import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
 
  theFormBuilder : FormBuilder;
  theFormGroup : FormGroup;
  fg2 : FormGroup;

  constructor(formBuilder : FormBuilder) { 
    this.theFormBuilder = formBuilder;
    this.theFormGroup = formBuilder.group({
      'name' : 'John',
      'animal' : 'slon'
    });


    this.fg2 = formBuilder.group({
    });

    var textInputFormControl = formBuilder.control('textInputValue');
    this.fg2.addControl('textInput',textInputFormControl);

  }

  fg2Submittion(submittedFg2 : FormGroup){
    console.log('orignal value was '  + submittedFg2.controls['textInput'].value);
    submittedFg2.controls['textInput'].setValue(submittedFg2.controls['textInput'].value + new Date().getDate().toString());
  }

  ngOnInit() {
    this.dynamicControlCount = 0;
    this.dynamicControlIndexes = [];
  }

  OnFormSubmitted(formValue : any){
    console.log(formValue);
  }

  UpdateName(updatedName : string)
  {
    console.log("updatedName");
    this.theFormGroup.controls['name'].setValue(updatedName);


    //adding new FormControl in the existing form group with FormBuilder
  
    //this.theFormGroup.addControl('updatedName',  this.theFormBuilder.control())
  
    this.dynamicControlIndexes.push(this.dynamicControlCount+=1)
    

    //this.theFormGroup.addControl(this.dynamicControlCount.toString(), formControlX);

    if(!this.theFormGroup.contains('dyn')){
      var formControlX = this.theFormBuilder.control(updatedName);
      
      this.theFormGroup.addControl('dyn', formControlX);
    }
    else{
      this.theFormGroup.controls['dyn'].setValue('dyn - ' + updatedName);
    }

    this.theFormGroup.addControl(this.dynamicControlCount.toString(), this.theFormBuilder.control(updatedName));
    

    this.theFormGroup.addControl('item'+this.dynamicControlCount.toString(), this.theFormBuilder.control(updatedName));


  }

  dynamicControlCount : number;
  dynamicControlIndexes : number[];
}
