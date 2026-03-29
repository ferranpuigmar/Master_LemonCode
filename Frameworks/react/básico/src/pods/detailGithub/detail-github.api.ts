import { MemberGithubDetailApiModel } from "./detail-github.api-model";
import { MemberGithubDetailEntity } from "./detail-github.vm";
import { GetDetailInterface } from "@src/common/pods/detail/detail.api";
import { mapMemberFromApiToVm } from "./detail-github.mappers";

const baseUrl = "https://api.github.com/users";

export const getDetailInfo: GetDetailInterface<MemberGithubDetailEntity> = {
    execute: async (id: string): Promise<MemberGithubDetailEntity> => {
        try {
            const response = await fetch(`${baseUrl}/${id}`);

            if (response.status === 404) {
                throw new Error(`User with id ${id} not found`);
            }

            if (!response.ok) {
                throw new Error(`Unable to load user detail for id ${id}`);
            }

            const data = await response.json() as MemberGithubDetailApiModel;

            return mapMemberFromApiToVm(data);
        } catch (error) {
            throw new Error(`Error fetching user detail for id ${id}: ${(error as Error).message}`);
        }
    },
};