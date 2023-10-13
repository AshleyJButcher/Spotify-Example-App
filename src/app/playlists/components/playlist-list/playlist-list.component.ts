import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from './Playlist';
import { PlaylistsViewComponent } from '../../containers/playlists-view/playlists-view.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
})
export class PlaylistListComponent {
  @Input('items') playlists: Playlist[] = [];

  @Output() selectedIdChange = new EventEmitter<Playlist['id']>();

  @Input() set selectedId(id: string | undefined) {
    this.selectedIds = id? [id] : []
  }

  selectedIds: Playlist['id'][] = [];
  // selectedIds: Array<Playlist['id']> = [];
  // selectedIds: string[] = [];

  select(id: string) {
    this.selectedIdChange.emit(id);
    // this.selectedIds = [id];
  }
}
