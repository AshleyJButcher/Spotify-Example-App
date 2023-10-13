import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './music.component';
import { AlbumSearchViewComponent } from './containers/album-search-view/album-search-view.component';

const routes: Routes = [
  {
    path: '' /* /music/'' */,
    component: MusicComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: AlbumSearchViewComponent,
      },
      {
        // path: 'albums/ydj5rji45',
        // path: 'albums/3rgebgffs',
        path: 'albums/:albumId',
        component: AlbumSearchViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicRoutingModule {}
