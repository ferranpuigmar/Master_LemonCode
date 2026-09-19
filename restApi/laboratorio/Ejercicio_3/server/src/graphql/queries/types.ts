import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { CharacterType } from '../types.js';

export const InfoType = new GraphQLObjectType({
  name: 'Info',
  fields: {
    count: { type: new GraphQLNonNull(GraphQLInt) },
    pages: { type: new GraphQLNonNull(GraphQLInt) },
    next: { type: GraphQLString },
    prev: { type: GraphQLString },
  },
});

export const CharacterListType = new GraphQLObjectType({
  name: 'CharacterList',
  fields: {
    info: { type: new GraphQLNonNull(InfoType) },
    results: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CharacterType))),
    },
  },
});
