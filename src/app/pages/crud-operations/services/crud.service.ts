import { Injectable } from '@angular/core';
import { dataList } from '../models/crud.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  updateToLocalStorage(updateData: dataList[]){
    localStorage.setItem('dataList',JSON.stringify(updateData))
  }
  getFromLocalStorage(): dataList[] {
    return JSON.parse(localStorage.getItem('dataList') || '{}')
  }
}
