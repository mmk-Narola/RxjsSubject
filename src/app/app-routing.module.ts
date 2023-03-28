import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnecomponentComponent } from './onecomponent/onecomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponet.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';

const routes: Routes = [
  { path: 'one', component: OnecomponentComponent },
  { path: 'two', component: SecondcomponentComponent },
  { path: 'sharereplay', component: ShareReplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
