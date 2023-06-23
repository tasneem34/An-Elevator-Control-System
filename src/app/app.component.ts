 import { Component, OnInit } from '@angular/core';
 import { collectionSnapshots, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { ServeService } from './services/serve.service';

import { map } from 'rxjs';
import Cars from './models/cars';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cars: Cars[] = [];

  constructor(private  serveService:ServeService ){
    this.serveService.getAll().subscribe((data)=>{
      this.cars=data;
    })
     
    for(let car of this.cars)
    {
        if (car.position>car.target){
            car.up_down=1;
        }else if (car.position<car.target)
        {
          car.up_down=2;
        }
        else {
          car.up_down=0;
        }
      this.serveService.updateFiled(car.id,car.up_down)
    }
    
   }
 
   
  ngOnInit(): void {

   /* collectionSnapshots(this.serveService.getAll()).pipe(
      map((changes) => {
        return changes.map((c) => {
          return ({ id: c.id, ...c.data() })
        })
      })
    ).subscribe(data => {
      this.cars = data;
    });*/
   
    
  }

}
