import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bidirectional-binding',
  templateUrl: './bidirectional-binding.component.html',
  styleUrls: ['./bidirectional-binding.component.css']
})
export class BidirectionalBindingComponent implements OnInit {

  fg : FormGroup;
  
  constructor(fb : FormBuilder) { 
    this.fg = fb.group({
      'Model' : ['', Validators.required],
      'Make ' : [ '', Validators.minLength(4)],
      'Year' : '2017'
    });
  }

  ngOnInit() {
  }

  OnSubmitForm(fgValue:any){
    console.log(fgValue);
  }

}
