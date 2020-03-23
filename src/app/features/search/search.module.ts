import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  { path: '', component : SearchComponent}
];

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports : [RouterModule]
})
export class SearchModule { }
