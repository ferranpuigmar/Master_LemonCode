import { GraphQLInt, GraphQLString } from "graphql";
import { CharacterListType } from "./types.js";
import { PAGE_SIZE, db } from "../../db.js";
import { CharacterListResponse } from "../../model.js";

interface CharactersArgs {
  name?: string;
  page: number;
}

export const characters = {
    type: CharacterListType,
    args: {
        name: { type: GraphQLString },
        page: { type: GraphQLInt, defaultValue: 1 },
    },
    resolve: (_parent: unknown, { name, page }: CharactersArgs): CharacterListResponse => {
        const search = name?.toLowerCase();

        const matches = search
            ? db.characters.filter((c) => c.name.toLowerCase().includes(search))
            : db.characters;

        const pages = Math.ceil(matches.length / PAGE_SIZE);
        const offset = (page - 1) * PAGE_SIZE;

        return {
            info: {
                count: matches.length,
                pages,
                next: page < pages ? String(page + 1) : null,
                prev: page > 1 ? String(page - 1) : null,
            },
            results: matches.slice(offset, offset + PAGE_SIZE),
        };
    },
};
