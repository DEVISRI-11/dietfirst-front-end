
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:"display",component:DisplayComponent},
  {path:"upload",component:UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }