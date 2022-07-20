import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatInputModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatInputModule
    ]
  })
  export class SharedModule { }