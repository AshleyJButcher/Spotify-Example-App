import { Component, Input } from '@angular/core';
import { Album } from 'src/app/core/model/Album';

@Component({
  selector: 'app-albums-grid',
  templateUrl: './albums-grid.component.html',
  styleUrls: ['./albums-grid.component.scss'],
})
export class AlbumsGridComponent {
  @Input() albums: Album[] = [];
}
