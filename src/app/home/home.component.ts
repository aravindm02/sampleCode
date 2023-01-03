import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submitForm: any
  
  constructor(private fb:FormBuilder) {

   }
  ngOnInit(): void {
    this.submitForm=this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      phoneNo:[null,[Validators.required]],
      country:[null,[Validators.required]],
    })
  }

}
