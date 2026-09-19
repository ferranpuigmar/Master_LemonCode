import { gql } from "graphql-request";
import { CharacterEntityApi } from "./character.api-model";

export interface CharacterQueryResponse {
    character: CharacterEntityApi
}

export const CharacterQuery = gql`
    query Character($id: ID!){
        character(id: $id){
            id
            name
            status
            species
            type
            gender
            origin {
                name
                url
            }
            location {
                name
                url
            }
            image
            episode
            url
            created
            bestSentence
        }
    }`

export const UpdateCharacterMutation = gql`
    mutation UpdateCharacter($id: ID!, $input: CharacterInput!){
        updateCharacter(id: $id, input: $input) {
            id
        }
    }
    `