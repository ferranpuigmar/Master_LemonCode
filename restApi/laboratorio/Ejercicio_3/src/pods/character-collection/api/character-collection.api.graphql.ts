import { gql } from 'graphql-request';
import { CharacterCollectionApi } from './character-collection.api-model';

export interface GetCharacterCollectionResponse {
  characters: CharacterCollectionApi;
}

export const charactersQuery = gql`
  query Characters($name: String, $page: Int) {
    characters(name: $name, page: $page) {
      info {
        pages
      }
      results {
        id
        name
        status
        species
        image
        origin {
          name
        }
      }
    }
  }
`;
