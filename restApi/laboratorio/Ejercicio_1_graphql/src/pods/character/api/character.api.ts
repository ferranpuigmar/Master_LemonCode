import { ApiError, graphqlRequest } from '#core/api';
import { CharacterEntityApi } from './character.api-model';
import { characterQuery, GetCharacterResponse } from './character.api.graphql';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const data = await graphqlRequest<GetCharacterResponse>(characterQuery, { id });

  if (!data.character) {
    throw new ApiError('notFound', `No existe el personaje ${id}`);
  }

  return data.character;
};
