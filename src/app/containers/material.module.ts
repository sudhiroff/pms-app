import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatCardModule,MatSelectModule,
  MatTabsModule,MatCheckboxModule,
  MatInputModule,MatRadioModule,MatProgressSpinnerModule,
  MatSnackBarModule,MatStepperModule,MatIconModule,MatDialogModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatStepperModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule
],
exports: [
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatStepperModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
