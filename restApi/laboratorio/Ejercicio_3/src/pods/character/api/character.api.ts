import { apiClient, graphqlRequest } from '#core/api';
import { CharacterEntityApi } from './character.api-model';
import { CharacterQuery, CharacterQueryResponse, UpdateCharacterMutation } from './character.api.graphql';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const variables = {
    id
  }

  const data = await graphqlRequest<CharacterQueryResponse>(CharacterQuery, variables);
  return data.character;
};

export const updateCharacter = async (
  id: number,
  character: Partial<CharacterEntityApi>
): Promise<void> => {
  const variables = {
    id,
    input: {
      ...character
    }
  }

  await graphqlRequest(UpdateCharacterMutation, variables);
};
