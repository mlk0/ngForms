import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    var formControl = new FormControl("test");
    var value = formControl.value;

    var theValue = formControl.value;
    var isDirty = formControl.dirty;
    var isValid = formControl.valid;
    var errors = formControl.errors;

    console.log('theValue : ' + theValue + ', isDirty : ' + isDirty + ', isValid : ' + isValid);
    console.log(errors);


    formControl.setValue("new value");

    var theValue = formControl.value;
    var isDirty = formControl.dirty;
    var isValid = formControl.valid;
    console.log('theValue : ' + theValue + ', isDirty : ' + isDirty + ', isValid : ' + isValid);





     var myFormGroup = new FormGroup(
      {
        firstName: new FormControl("name"),
        lastName: new FormControl("surname"),
        age: new FormControl("10")
      });

      var formGroupValue = myFormGroup.value;
      let formGroupIsValid = myFormGroup.valid;
      let formGroupIsDirty = myFormGroup.dirty;
      
      console.log(formGroupValue)


  }
  title = 'app works!';

}
