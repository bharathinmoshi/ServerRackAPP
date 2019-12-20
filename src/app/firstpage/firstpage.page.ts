import { Component, OnInit } from '@angular/core';
import {JsonfileService} from '../jsonfile.service'



@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {
  positionNo : any;
  value:any;
  qwerty : any;
  toprinted : Array<any> = [];
  constructor(private jsonService : JsonfileService) {
    this.positionNo = localStorage.getItem("mykey")
    this.jsonService.getJSON().subscribe(data => {
      this.value = data;
      console.log(data);
      this.value.forEach((x:any)=> { 
       if(x.hasOwnProperty("row_data")){
        this.qwerty = x.row_data;
        this.qwerty.forEach(ele => {
          if(ele.position == this.positionNo ){
           this.toprinted.push(ele)
          }
        });
       }
       })
      
  });
   }

  ngOnInit() {
  
  
  }

}
