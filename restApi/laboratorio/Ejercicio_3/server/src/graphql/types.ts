import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
  },
});

export const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(GraphQLString) },
    species: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    gender: { type: new GraphQLNonNull(GraphQLString) },
    origin: { type: new GraphQLNonNull(LocationType) },
    location: { type: new GraphQLNonNull(LocationType) },
    image: { type: new GraphQLNonNull(GraphQLString) },
    episode: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))),
    },
    url: { type: new GraphQLNonNull(GraphQLString) },
    created: { type: new GraphQLNonNull(GraphQLString) },
    bestSentence: { type: GraphQLString },
  },
});
