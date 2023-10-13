import { Injectable } from '@angular/core';
import { AlbumSearchResponse } from '../../model/Album';
import { HttpClient } from '@angular/common/http';
import {
  map,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicAPIService {
  constructor(private http: HttpClient) {}

  fetchAlbumSearchResults(query: string) {
    return this.http
      .get<AlbumSearchResponse>('search', {
        params: { type: 'album', q: query },
      })
      .pipe(map((res) => res.albums.items));
  }
}
