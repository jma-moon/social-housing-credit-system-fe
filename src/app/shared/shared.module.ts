import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NotFoundComponent,
  ],
  exports: [
    NotFoundComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
