import { Injectable } from '@angular/core';
import { ProductList } from '../models/crud.interface';
import * as _ from 'lodash';
import { CrudAPiUrl } from './crudUrls';
import { CommonService } from 'src/app/_utils/services/commonService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService extends CommonService{
  _=_;

  getUserId(): string{
    return (localStorage.getItem('userId') || '{}');
  }

  getData():Observable<any>{
    const url = CrudAPiUrl.getProduct;
    return this.httpGet(url);
  }

  addData(product: ProductList):Observable<any>{
    const url = CrudAPiUrl.createProduct;
    return this.httpPost(url, product)
  }

  updateData(product: ProductList){
    const url = CrudAPiUrl.updateProduct.replace(':id', product._id);
    return this.httpPut(url, product)
  }

  deleteData(id: string){
    const url = CrudAPiUrl.deleteProduct.replace(':id', id);
    return this.httpDelete(url)
  }
  // deleteData(data: dataList){
  //   if(localStorage.getItem('auth')){
  //     const email:string = (localStorage.getItem('auth') || '{}');
  //     const dataList: dataList[] = localStorage.getItem(email)?JSON.parse(localStorage.getItem(email) || '{}'): []
  //     const filterData = _.filter(dataList,(list,index)=> list.id !==data.id
  //     )
  //     localStorage.setItem(email,JSON.stringify(filterData))
  //   }
  // }

  // updateToLocalStorage(updateData: dataList[]){
  //   localStorage.setItem('dataList',JSON.stringify(updateData))
  // }
  // getFromLocalStorage(): dataList[] {
  //   return JSON.parse(localStorage.getItem('dataList') || '{}')
  // }
}
