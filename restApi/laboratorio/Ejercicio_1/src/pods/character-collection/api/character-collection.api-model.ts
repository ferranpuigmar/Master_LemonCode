import { CharacterEntityApi } from '#common/models';

export interface CharacterCollectionApi {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterEntityApi[];
}
