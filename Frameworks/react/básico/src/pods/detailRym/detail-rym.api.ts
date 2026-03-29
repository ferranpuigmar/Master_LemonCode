import { CharacterApiModel } from "./detail-rym.api-model";
import { MemberRyMDetailEntity } from "./detail-rym.vm";
import { GetDetailInterface } from "@src/common/pods/detail/detail.api";
import { mapCharacterFromApiToVm } from "./detail-rym.mappers";

const baseUrl = "https://rickandmortyapi.com/api/character";

export const getDetailInfo: GetDetailInterface<MemberRyMDetailEntity> = {
    execute: async (id: string): Promise<MemberRyMDetailEntity> => {
        const response = await fetch(`${baseUrl}/${id}`);
        if (!response.ok) {
            throw new Error(`Unable to load user detail for id ${id}`);
        }

        const data = await response.json() as CharacterApiModel;
        
        return mapCharacterFromApiToVm(data);
    },
};