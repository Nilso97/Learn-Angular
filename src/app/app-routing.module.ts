import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import FirstComponentComponent from './components/first-component/first-component.component';
import ListRenderComponent from './components/list-render/list-render.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'lista-animais', component: ListRenderComponent },
  { path: 'lista-animais/:id', component: ItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
