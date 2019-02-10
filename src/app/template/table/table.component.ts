import { Component, OnInit } from '@angular/core';
import {FormServiceService} from '../../service/form-service.service';
import {Form} from '../../model/form';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private formService:FormServiceService) { }
  data;
  ngOnInit() {
    this.data = this.formService.refreshList();
  }
  delete(id:string){
    this.formService.delete(id);
  }
  updateForm(form:Form){
    this.formService.update(form);
  }
}
