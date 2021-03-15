import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondParentComponentComponent } from './components/second-parent-component/second-parent-component.component';
import { SerieComponentComponent } from './components/serie-component/serie-component.component';


const routes: Routes = [
  {
    path:'',
    component : SerieComponentComponent
  },
  {
    path:'secondP',
    component : SecondParentComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
