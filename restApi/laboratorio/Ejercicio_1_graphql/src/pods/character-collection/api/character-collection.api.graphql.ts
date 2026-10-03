import { gql } from 'graphql-request';
import { CharacterCollectionApi } from './character-collection.api-model';

export interface GetCharacterCollectionResponse {
  characters: CharacterCollectionApi;
}

export const charactersQuery = gql`
  query Characters($name: String, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
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
