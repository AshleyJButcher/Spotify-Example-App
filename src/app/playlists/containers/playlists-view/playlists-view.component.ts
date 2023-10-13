import { Component, Input } from '@angular/core';
import { mockPlaylists } from '../../components/playlist-list/mockPlaylists';
import { Playlist } from '../../components/playlist-list/Playlist';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss'],
})
export class PlaylistsViewComponent {
  mode: 'details' | 'editor' = 'details';

  playlists: Playlist[] = mockPlaylists;

  // selected: Playlist | undefined = mockPlaylists[2];
  selected?: Playlist;

  selectPlaylistById(id: Playlist['id']) {
    this.selected = this.playlists.find((p) => p.id === id);
  }

  savePlaylist(draft: Playlist) {
    console.log('saving...', draft);
  }

  showDetails() {
    this.mode = 'details';
  }

  showEditor() {
    this.mode = 'editor';
  }
}
