import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {

  myData:any;
  myData$:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
     //this.api.getApiData().subscribe((data)=>{
      // this.myData=data;
     //})
    this.myData$=this.api.getApiData()
    .pipe(tap((data) => (this.myData=data)));
  }


}
