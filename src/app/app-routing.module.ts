import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStoreComponent } from './data-store/data-store.component';
import { MyDataComponent } from './my-data/my-data.component';

const routes: Routes = [
  {path:'data-store',component:DataStoreComponent},
  {path:'my-data',component:MyDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
