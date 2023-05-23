import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url='https://dummyjson.com/users';
  urlLink='https://jsonplaceholder.typicode.com/users';

  constructor( private http:HttpClient) { }
  sendData(user:any){
    console.log(this.url,user);
    return this.http.get(this.url,user)
  }
getData(){
  this.http.get(this.url).subscribe((data:any)=>{
    console.log(data);
  })
}

getUsers(){
  return this.http.get<any>(this.url);
}

getApiData(){
  return this.http.get(this.urlLink);
}
  
}
