import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CheckPasswordDirective } from "./directives/check-password.directive";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
       CheckPasswordDirective
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        CheckPasswordDirective,
        MatIconModule
    ]
  })
  export class SharedModule { }