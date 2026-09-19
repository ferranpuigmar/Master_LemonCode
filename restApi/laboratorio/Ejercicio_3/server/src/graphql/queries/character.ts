import { GraphQLID, GraphQLNonNull } from "graphql";
import { CharacterType } from "../types.js";
import { db } from "../../db.js";
import { Character } from "../../model.js";

export const character = {
    type: CharacterType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: (_parent: unknown, { id }: { id: string }): Character | null => {
        return db.characters.find((c) => String(c.id) === id) || null;
    },
};
