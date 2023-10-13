import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EMPTY,
  ReplaySubject,
  Subject,
  Subscription,
  catchError,
  concatMap,
  exhaustMap,
  filter,
  map,
  mergeMap,
  share,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { Album } from 'src/app/core/model/Album';
import { MusicAPIService } from 'src/app/core/services/music-api/music-api.service';

@Component({
  selector: 'app-album-search-view',
  templateUrl: './album-search-view.component.html',
  styleUrls: ['./album-search-view.component.scss'],
})
export class AlbumSearchViewComponent {
  queryChanges = this.route.queryParamMap.pipe(
    map((pm) => pm.get('q')),
    filter((q): q is string => q !== null)
  );

  resultsChange = this.queryChanges.pipe(
    switchMap((q) =>
      this.api.fetchAlbumSearchResults(q).pipe(catchError((error) => EMPTY))
    ),
    share()
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: MusicAPIService
  ) {}

  searchAlbums(query: string) {
    this.router.navigate([], {
      queryParams: { q: query },
      relativeTo: this.route,
    });
  }
}
