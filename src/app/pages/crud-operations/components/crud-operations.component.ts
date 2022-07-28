import { Component, OnInit  } from '@angular/core';
import { ProductList } from '../models/crud.interface';
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
import { UUID } from 'angular2-uuid';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';




@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CrudOperationsComponent implements OnInit {
  productList = [] as ProductList[];
  _=_;
  searchCtrl: FormControl;
  filteredList: Observable<any[]>;
  array :string[] = [];
  message!:string;
  displayedColumns = ['select', '_id', 'productName', 'productDesc', 'edit'];
  dataSource!: MatTableDataSource<ProductList>
  selection = new SelectionModel<ProductList>(true, []);

  constructor(public matDialog: MatDialog,
    private crudService: CrudService) {
      this.getProductData();
      this.searchCtrl = new FormControl();
      this.filteredList = this.searchCtrl.valueChanges
      .pipe(
        startWith(''),
        map(data => data ? this.filterList(data) : this.productList.slice())
      );
  }


  ngOnInit(): void {
  }

  getProductData(){
    this.crudService.getProduct().subscribe({
      next: result =>{
        this.productList = result.data
        this.dataSource = new MatTableDataSource(this.productList);
        this.searchCtrl.reset();
      },
      error: error=>{

      }
    })
  }
  addProduct(product: ProductList){
    this.crudService.addProduct(product).subscribe({
      next: () =>{
      },
      error: ()=>{

      }
    })
  }
  updateProduct(product: ProductList){
    this.crudService.updateProduct(product).subscribe({
      next: () =>{
      },
      error: ()=>{

      }
    })
  }
  deleteProduct(products: ProductList[]){
   const productIds= products.map((data)=>{
    return data._id
   })
    this.crudService.deleteProductById(productIds).subscribe({
      next: () =>{
      },
      error: ()=>{

      }
    })
  }
  filterList(name: string) {
    return this.productList.filter(item =>
      item.productName.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  openDialog(type: string, editData?: ProductList){
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
            this.deleteProduct(result.data)
            break;
          case 'add':
             this.addProduct(result.data)
            break;
          case 'edit':
            this.updateProduct(result.data)           
            break;
          default:
            break;
        }
      }
      this.getProductData();
      this.selection.clear();
    })
  }
  componentName(type: string):ComponentType<any> {
    switch (type) {
      case 'delete':
        return DeleteDialogComponent
      case 'add':
        return AddEditDialogComponent
      case 'edit':
        return AddEditDialogComponent
      default:
        return AddEditDialogComponent
    }
  }
  getConfig(type: string, configData?: ProductList){
    switch (type) {
      case 'delete':
        return this.selection.selected
      case 'add':
        const newData={
          'productId': UUID.UUID().toString(),
          'productName':"",
          'productDesc':"",
          'userId': this.crudService.getUserId()
        }
        return {productData: newData, from: 'Add'}
      case 'edit':
         return {productData: configData, from: 'Update'}
      default:
        return {}
    }
  }

  warning(event :string) {
    this.message = event
    setTimeout(() => (this.message = ''), 2000);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  selectedOption(product: ProductList){
    this.dataSource = new MatTableDataSource<ProductList>([product])
  }
}
