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
  dataSet : any;
  toprinted : Array<any> = [];

  constructor(private jsonService : JsonfileService) {
    this.positionNo = localStorage.getItem("positionValue")
    this.jsonService.getJSON().subscribe(data => {
      this.value = data;
      this.value.forEach((x:any)=> { 
       if(x.hasOwnProperty("row_data")){
         this.dataSet = x.row_data;
         this.dataSet.forEach(ele => {
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
