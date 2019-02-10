import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormServiceService} from '../../service/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formService:FormServiceService) { }

  ngOnInit() {
  	this.resetForm();
  }

  resetForm(form?:NgForm){
  	if(form != null){

  	}else{
  		this.formService.formData = {
	  		id : null,
	  		name :"",
	  		email:"",
	  		description:""
  		}
  	}
  }

  onSubmit(register:NgForm){
    if(register.value.id == "" || register.value.id == null){
      this.formService.save(register.value);
      console.log("new record")
      this.resetForm(null);
    }else{
      this.formService.update(register.value);
      console.log("update record")
      this.formService.refreshList();
      this.resetForm(null);
    }
  }

}
