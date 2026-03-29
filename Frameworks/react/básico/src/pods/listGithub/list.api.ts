import { GetItemsListFn, GetListItemsParams, GetListItemsResponse } from "@src/common/pods/list/list.api";
import { MemberGithubEntityApiResponse } from "./list.api-model";
import { mapMemberGithubApiToVm } from "./list.mapper";
import { MemberEntity } from "@src/common/pods/list/list.vm";

const baseUrl = "https://api.github.com/orgs";

export const DEFAULT_MEMBER_FOR_GITHUB = 'lemoncode';

type Result = GetListItemsResponse<MemberEntity, string | undefined>;

export const getMemberCollection: GetItemsListFn<GetListItemsParams, Result> = async ({ name, params }) => {
    const urlParams = params ? `?${params}` : '';
    try {
        const response: Response = await fetch(`${baseUrl}/${name}/members${urlParams}`);
        if (response.status === 404 || !response.ok) {
            return { data: [], paginationInfo: undefined };
        }
        const result = (await response.json()) as MemberGithubEntityApiResponse;
        return {
            data: result.map(mapMemberGithubApiToVm) || [],
            paginationInfo: response.headers.get('Link') || undefined
        };
    } catch {
        return { data: [], paginationInfo: undefined };
    }
};
