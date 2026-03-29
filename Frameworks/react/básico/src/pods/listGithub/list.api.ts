import { MemberGithubEntityApi, MemberGithubEntityApiResponse } from "./list.api-model";
import { mapMemberGithubApiToVm } from "./list.mapper";
import { MemberEntity } from "@src/common/pods/list/list.vm";

export const DEFAULT_MEMBER_FOR_GITHUB = 'lemoncode';

export interface GetListItemsResponse {
    data: MemberEntity[];
    links: string | undefined;
}

export type GetListItemsResult<T> = Promise<T>;

export type GetListItemsParams = {
    name?: string;
    page?: string;
    params?: string;
};

export type GetItemsListFn<TParams, TResult> = (params: TParams) => Promise<TResult>;


export const getMemberCollection: GetItemsListFn<GetListItemsParams, GetListItemsResponse> = async ({ name, params }) => {
    const urlParams = params ? `?${params}` : '';
    try {
        const response: Response = await fetch(`https://api.github.com/orgs/${name}/members${urlParams}`);
        if (response.status === 404 || !response.ok) {
            return { data: [], links: undefined };
        }
        const result = (await response.json()) as MemberGithubEntityApiResponse;
        return {
            data: result.map(mapMemberGithubApiToVm) || [],
            links: response.headers.get('Link') || undefined
        };
    } catch {
        return { data: [], links: undefined };
    }
};
