import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-client',
  standalone: true,
  imports: [],
  templateUrl: './api-client.component.html',
  styleUrl: './api-client.component.css'
})
export class ApiClientComponent {
  userList: any =[];
 http = inject(HttpClient); 
//  constructor(private http: HttpClient){

//  }

  getallUser(){
    // this.http.get("APICALL").subscribe((res:any)=>{
    // this.userList = res})
  }
}
