import { Playlist } from "./Playlist";

// Code Actions
// - extract to const
// - move to new file
// - copy and paste type (not action!)
// - Extract to interface
// - F2 - rename symbol everywhere

export const mockPlaylists: Playlist[] = [
  {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Cool playlist',
  },
  {
    id: '234',
    name: 'Playlist 234',
    public: false,
    description: 'BEst playlist',
  },
  {
    id: '345',
    name: 'Playlist 345',
    public: true,
    description: 'Awesome playlist',
  },
];
