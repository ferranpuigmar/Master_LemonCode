import { graphqlRequest } from '#core/api';
import { CharacterCollectionApi } from './character-collection.api-model';
import {
  charactersQuery,
  GetCharacterCollectionResponse,
} from './character-collection.api.graphql';

interface GetCharacterCollectionParams {
  page?: number;
  name?: string;
}

export const getCharacterCollection = async ({
  page,
  name,
}: GetCharacterCollectionParams = {}): Promise<CharacterCollectionApi> => {
  const variables = {
    name,
    page
  }

  const data = await graphqlRequest<GetCharacterCollectionResponse>(charactersQuery, variables);

  return data.characters;
};
