import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {JsonfileService} from '../jsonfile.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
value:any;
dataSet:any;
toprinted: Array<any> = [];


  constructor(private router: Router,private jsonService : JsonfileService) {
    this.jsonService.getJSON().subscribe(data => {
      this.value = data;
      this.value.forEach((x:any)=> { 
    if(x.hasOwnProperty("row_data")){
        this.dataSet = x.row_data;
        console.log(this.dataSet)
    for (let index = 1; index < 14; index++) {
          var result = this.dataSet.find(obj => {
            return obj.position === index;
          });
          if(result != undefined) this.toprinted.push(result);
          else this.toprinted.push({position: index, img: "empty.png"});
     }
        }
    
       })  
  });
  }


  // Function to route to nextpage
  navigateTo(Objpos)
  {
    localStorage.setItem("positionValue",Objpos);
    this.dataSet.forEach(element => {
      if(element.position === Objpos)
      {
        this.router.navigateByUrl('/firstpage');
      }
         });
   
  }


}
