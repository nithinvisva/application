import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductList } from '../../models/crud.interface';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  productNames: string =''
  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataFormValues: ProductList[]) {
      this.productNames = (dataFormValues.map((data)=> data.productName)).toString()
     }

  ngOnInit(): void {
  }
  handleClick(value: boolean): void {
    const data={
      submit: value,
      data: this.dataFormValues
    }
    this.dialogRef.close(data);
  }

}
