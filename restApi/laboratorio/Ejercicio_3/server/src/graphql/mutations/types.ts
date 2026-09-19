import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export const LocationInputType = new GraphQLInputObjectType({
  name: 'LocationInput',
  fields: {
    name: { type: GraphQLString },
    url: { type: GraphQLString },
  },
});

export const CharacterInputType = new GraphQLInputObjectType({
  name: 'CharacterInput',
  fields: {
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    species: { type: GraphQLString },
    type: { type: GraphQLString },
    gender: { type: GraphQLString },
    origin: { type: LocationInputType },
    location: { type: LocationInputType },
    image: { type: GraphQLString },
    episode: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    bestSentence: { type: GraphQLString },
  },
});
