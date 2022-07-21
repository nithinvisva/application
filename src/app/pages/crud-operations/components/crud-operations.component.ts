import { Component, OnInit  } from '@angular/core';
import { dataList } from '../models/crud.interface';
import { MatDialog } from '@angular/material/dialog'
import { AddEditDialogComponent } from '../components/add-edit-dialog/add-edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import * as _ from 'lodash';
import { CrudService } from '../services/crud.service';
import { ComponentType } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith} from 'rxjs/operators';
import {map} from 'rxjs/operators';




@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CrudOperationsComponent implements OnInit {
  dataList : dataList[];
  _=_;
  searchCtrl: FormControl;
  filteredList: Observable<any[]>;

  constructor(public matDialog: MatDialog,
    private crudService: CrudService) {
      this.dataList = this.crudService.getData();
      this.searchCtrl = new FormControl();
      this.filteredList = this.searchCtrl.valueChanges
      .pipe(
        startWith(''),
        map(data => data ? this.filterList(data) : this.dataList.slice())
      );
  }


  ngOnInit(): void {
  }
  filterList(name: string) {
    return this.dataList.filter(item =>
      item.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  openDialog(type: string, editData?: dataList){
    const dialogRef = this.matDialog.open(this.componentName(type),{
      width: 'auto',
      height: 'auto',
      disableClose: true,
      data: this.getConfig(type,editData)
    })
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.submit) {
        switch (type) {
          case 'delete':
            this.crudService.deleteData(result.data);
            break;
          case 'add':
            this.crudService.addData(result.data)
            break;
          case 'edit':
            this.crudService.updateData(result.data)            
            break;
          default:
            break;
        }
      }
      this.dataList= this.crudService.getData();
      this.searchCtrl.reset();
      // else{
      //   if(type == 'edit'){
      //     this.dataList = this.crudService.getFromLocalStorage();
      //   }
      // }
    })
  }
  componentName(type: string):ComponentType<any> {
    switch (type) {
      case 'delete':
        return DeleteDialogComponent
      case 'add':
        return AddEditDialogComponent
      case 'edit':
        this.crudService.updateToLocalStorage(this.dataList);
        return AddEditDialogComponent
      default:
        return AddEditDialogComponent
    }
  }
  getConfig(type: string, configData?: dataList){
    switch (type) {
      case 'delete':
        return configData
      case 'add':
        const newData={
          "id": this.dataList.length >0  ? this.dataList[this.dataList.length-1].id+1:1,
          "name": "",
          "username": "",
          "email": "",
        }
        return {listData: newData, from: 'Add'}
      case 'edit':
         return {listData: configData, from: 'Update'}
      default:
        return {}
    }
  }
}
