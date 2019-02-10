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
        email: "exemplo0@gmail.com",
        description:""
       },
      {
        id: 1,
        name: "Jaoao",
        email: "exemplo1@gmail.com",
         description:""
       },
       {
         id: 2,
         name: "Mohamad",
         email: "exemplo2@gmail.com",
         description:""
       },
       {
        id: 3,
        name: "Cesar",
        email: "exemplo3@gmail.com",
        description:""
       },
       {
        id: 4,
        name: "Juan",
        email: "exemplo4@gmail.com",
         description:""
       },
       {
         id: 5,
         name: "Sheyma",
         email: "exemplo5@gmail.com",
         description:""
       },
    ]
  }
}
