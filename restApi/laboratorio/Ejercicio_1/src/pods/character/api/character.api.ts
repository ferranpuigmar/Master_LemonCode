import { apiClient } from '#core/api';
import { CharacterEntityApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const { data } = await apiClient.get<CharacterEntityApi>(`/character/${id}`);
  return data;
};
