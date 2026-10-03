import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character.api-model';

export interface GetCharacterResponse {
  character: CharacterEntityApi | null;
}

export const characterQuery = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        id
      }
      created
    }
  }
`;
