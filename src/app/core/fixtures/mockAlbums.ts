import { Album } from '../model/Album';

export const mockAlbums: Album[] = [
  {
    id: '123',
    name: 'Album 123',
    images: [
      {
        height: 300,
        width: 300,
        url: 'http://placekitten.com/300/300 ',
      },
    ],
  },
  {
    id: '234',
    name: 'Album 234',
    images: [
      {
        height: 300,
        width: 300,
        url: 'http://placekitten.com/400/400 ',
      },
    ],
  },
  {
    id: '345',
    name: 'Album 345',
    images: [
      {
        height: 300,
        width: 300,
        url: 'http://placekitten.com/200/200 ',
      },
    ],
  },
  {
    id: '456',
    name: 'Album 456',
    images: [
      {
        height: 300,
        width: 300,
        url: 'http://placekitten.com/500/500 ',
      },
    ],
  },
];
