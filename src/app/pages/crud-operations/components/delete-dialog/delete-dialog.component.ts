import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataList } from '../../models/crud.interface';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  

  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataFormValues: dataList) { }

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
