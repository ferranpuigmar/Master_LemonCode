import { apiClient } from '#core/api';
import { CharacterCollectionApi } from './character-collection.api-model';

interface GetCharacterCollectionParams {
  page?: number;
  name?: string;
}

export const getCharacterCollection = async ({
  page,
  name,
}: GetCharacterCollectionParams = {}): Promise<CharacterCollectionApi> => {
  const { data } = await apiClient.get<CharacterCollectionApi>('/character', {
    params: { page, name },
  });

  return data;
};
