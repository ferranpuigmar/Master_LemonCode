export interface CharacterVm {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  originName: string;
  locationName: string;
  episodeCount: number;
}

export const createEmptyCharacter = (): CharacterVm => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
  originName: '',
  locationName: '',
  episodeCount: 0,
});
