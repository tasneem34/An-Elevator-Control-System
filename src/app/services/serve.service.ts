import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, updateDoc } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import Cars from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private db: Firestore) { }


  
getAll() {
  //return collection(this.db, "cars");

  let $carssRef=collection(this.db,"cars");
    return collectionData($carssRef,{idField:"id"}) as Observable<Cars[]>;
 }

 updateFiled(id:string , up_down:number){
  const dataUpdate = doc(this.db, "cars", id);
  return updateDoc(dataUpdate, {
    up_down:up_down,
     
});
}

}
