import { Injectable } from '@angular/core';
import {Form} from './../model/form';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  formData : Form;
  constructor() { }

  save(register:Form){
    this.refreshList();
  }
  
  update(register:Form){
    this.formData = register;
  }

  delete(id:string){
  	console.log("Delete Registes : " + id);
  }

  refreshList(){
    return  [
      {
        id: 0,
        name: "Pedro",
        email: "exemplo1@gmail.com",
        description:""
       },
      {
        id: 1,
        name: "Jaoao",
        email: "exemplo2@gmail.com",
         description:""
       },
       {
         id: 2,
         name: "Mohamad",
         email: "exemplo3@gmail.com",
         description:""
       },
    ]
  }
}
