import { Injectable } from '@angular/core';
import { dataList } from '../models/crud.interface';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  _=_;

  constructor() { }

  getData():dataList[]{
    if(localStorage.getItem('auth')){
    const email:string = (localStorage.getItem('auth') || '{}');
     return JSON.parse(localStorage.getItem(email)|| '{}')
    }
    return []
  }

  addData(data: dataList){
    if(localStorage.getItem('auth')){
      const email:string = (localStorage.getItem('auth') || '{}');
      const dataList: dataList[] = localStorage.getItem(email)?JSON.parse(localStorage.getItem(email) || '{}'): []
      dataList.push(data)
      localStorage.setItem(email,JSON.stringify(dataList))
    }
  }
  updateData(data: dataList){
    if(localStorage.getItem('auth')){
      const email:string = (localStorage.getItem('auth') || '{}');
      const dataList: dataList[] = localStorage.getItem(email)?JSON.parse(localStorage.getItem(email) || '{}'): []
      const filterData = dataList.map((list)=>{
        return (list.id == data.id)? data:list
      })
      localStorage.setItem(email,JSON.stringify(filterData))
    }
  }
  deleteData(data: dataList){
    if(localStorage.getItem('auth')){
      const email:string = (localStorage.getItem('auth') || '{}');
      const dataList: dataList[] = localStorage.getItem(email)?JSON.parse(localStorage.getItem(email) || '{}'): []
      const filterData = _.filter(dataList,(list,index)=> list.id !==data.id
      )
      localStorage.setItem(email,JSON.stringify(filterData))
    }
  }

  updateToLocalStorage(updateData: dataList[]){
    localStorage.setItem('dataList',JSON.stringify(updateData))
  }
  getFromLocalStorage(): dataList[] {
    return JSON.parse(localStorage.getItem('dataList') || '{}')
  }
}
