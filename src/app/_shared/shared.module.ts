import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CheckPasswordDirective } from "./directives/check-password.directive";
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from "@angular/common/http";
import { SpecialCharacterDirective } from './directives/special-character.directive';
import { DisableCopyPasteDirective } from './directives/disable-copy-paste.directive';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [
       CheckPasswordDirective,
       SpecialCharacterDirective,
       DisableCopyPasteDirective,
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTableModule,
        MatCheckboxModule,
        MatSnackBarModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        CheckPasswordDirective,
        MatIconModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        HttpClientModule,
        SpecialCharacterDirective,
        DisableCopyPasteDirective,
        MatTableModule,
        MatCheckboxModule,
        MatSnackBarModule
    ]
  })
  export class SharedModule { }