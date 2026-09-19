import { GraphQLID, GraphQLNonNull } from "graphql";
import { CharacterType } from "../types.js";
import { CharacterInputType } from "./types.js";
import { db } from "../../db.js";
import { Character } from "../../model.js";

type CharacterInput = Partial<Omit<Character, 'id' | 'url' | 'created'>>;

interface UpdateCharacterArgs {
  id: string;
  input: CharacterInput;
}

const merge = (current: Character, input: CharacterInput): Character => ({
  ...current,
  ...input,
  origin: { ...current.origin, ...input.origin },
  location: { ...current.location, ...input.location },
});

export const updateCharacter = {
    type: CharacterType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        input: { type: new GraphQLNonNull(CharacterInputType) },
    },
    resolve: (_parent: unknown, { id, input }: UpdateCharacterArgs): Character | null => {
        const current = db.characters.find((character) => String(character.id) === id);

        if (!current) {
            return null;
        }

        const updated = merge(current, input);
        db.characters = db.characters.map((character) => (character === current ? updated : character));

        return updated;
    },
};
