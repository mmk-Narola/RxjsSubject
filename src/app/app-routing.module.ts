import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnecomponentComponent } from './onecomponent/onecomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponet.component';

const routes: Routes = [
  { path: 'one', component: OnecomponentComponent },
  { path: 'two', component: SecondcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
