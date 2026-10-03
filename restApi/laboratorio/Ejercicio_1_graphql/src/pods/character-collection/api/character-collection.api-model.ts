import { CharacterEntityApi } from '#common/models';

export interface CharacterCollectionApi {
  info: {
    pages: number | null;
  };
  results: CharacterEntityApi[];
}
