import { MemberEntity } from "@src/common/pods/list/list.vm";
import { GetMemberCollectionApiResponse, MemberRickAndMortyEntityApiInfo } from "./list-rym.api-model";
import { mapRickAndMortyCharacterToVm } from "./list-rym.mapper";

export interface GetListItemsResponse {
    data: MemberEntity[];
    links: MemberRickAndMortyEntityApiInfo;
}

export type GetListItemsResult<T> = Promise<T>;

export type GetListItemsParams = {
    name?: string;
    page?: string;
    params?: string;
};

export type GetItemsListFn<TParams, TResult> = (params: TParams) => Promise<TResult>;


export const getCharactersCollection: GetItemsListFn<GetListItemsParams, GetListItemsResponse> = async ({ name, params, page }) => {
    console.log({ name, params, page });
    const urlParams: string[] = [];
    if (name) urlParams.push(`name=${name}`);
    if (page) urlParams.push(`page=${page}`);
    console.log({ urlParams });
    if (params && !name && !page) urlParams.push(params);

    const urlParamsString = urlParams.length > 0 ? `?${urlParams.join('&')}` : '';

    try {
        const response: Response = await fetch(`https://rickandmortyapi.com/api/character${urlParamsString}`);
        if (response.status === 404 || !response.ok) {
            return { data: [], links: { count: 0, pages: 0, next: null, prev: null } };
        }
        const result = (await response.json()) as GetMemberCollectionApiResponse;

        return {
            data: result.results.map(mapRickAndMortyCharacterToVm) || [],
            links: result.info
        };
    } catch {
        return { data: [], links: { count: 0, pages: 0, next: null, prev: null } };
    }
};
