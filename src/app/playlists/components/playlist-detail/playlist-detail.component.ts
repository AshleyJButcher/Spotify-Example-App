import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../playlist-list/Playlist';
import { PlaylistsViewComponent } from '../../containers/playlists-view/playlists-view.component';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailComponent {

  // constructor(private parent:PlaylistsViewComponent){}

  @Output() edit = new EventEmitter<Playlist['id']>();

  editClick() {
    this.edit.emit(this.playlist?.id)
  }

  @Input() playlist?: Playlist 
}
