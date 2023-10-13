import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/music/search',
    pathMatch: 'full',
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./playlists/playlists.module').then((m) => m.PlaylistsModule),
  },
  {
    path: 'music',
    loadChildren: () =>
      import('./music/music.module').then((m) => m.MusicModule),
  },
  {
    path: '**', // match all
    redirectTo: 'playlists',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  providers: [
    // {
    //   provide: ???
    // }
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
