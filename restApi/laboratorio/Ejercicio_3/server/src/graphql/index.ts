import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { characters } from './queries/characters.js';
import { character } from './queries/character.js';
import { updateCharacter } from './mutations/updateCharacter.js';


export const createGraphqlServer = () => {
    const schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: {
                characters,
                character,
            }
        }),
        mutation: new GraphQLObjectType({
            name: 'Mutation',
            fields: {
                updateCharacter,
            }
        }),
    });

    return schema;
}