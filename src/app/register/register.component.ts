import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted=false;
  constructor(private formBuilder:FormBuilder){}
  
  registerForm:FormGroup;

  ngOnInit(): void {

    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      addressline1:['',Validators.required],
      city:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    });
   
  }

  get f(){
    return this.registerForm.controls;
  }
  onSubmit(){ 
    this.submitted=true;
  
    if(this.registerForm.invalid)
    {
      return;
    }
    else{
      alert('your details are stored...')
    }

  }

}