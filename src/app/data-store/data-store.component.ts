import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-store',
  templateUrl: './data-store.component.html',
  styleUrls: ['./data-store.component.css']
})
export class DataStoreComponent implements OnInit {

  formData!:FormGroup;
  usersDate:any=[];
  items!:FormArray;

  constructor(private formBuilder:FormBuilder,private api:ApiService) { }
  

  ngOnInit(): void {
    this.formData=this.formBuilder.group({
      firstName:(['',Validators.required]),
      lastName:(['', Validators.required])
    })
  }

  onSubmit(){
    if(this.formData.valid){
    console.log(this.formData.value)
    this.api.sendData(this.formData.value).subscribe((res:any)=>{
     this.usersDate=res;
     console.log(this.usersDate.users);
    })
   
  }else{
    console.log(this.formData.invalid);
    this.api.sendData(this.formData.value).subscribe((res:any)=>{
      this.usersDate=res;
     })
  }
    // this.api.getData().subscribe((res:any)=>{
    //   console.log(res);
    // })
  }

}
