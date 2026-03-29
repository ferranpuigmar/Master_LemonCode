import { MemberEntity } from "@src/common/pods/list/list.vm";
import { GetMemberCollectionApiResponse, MemberRickAndMortyEntityApiInfo } from "./list-rym.api-model";
import { mapRickAndMortyCharacterToVm } from "./list-rym.mapper";
import { GetItemsListFn, GetListItemsParams, GetListItemsResponse } from "@src/common/pods/list/list.api";

type Result = GetListItemsResponse<MemberEntity, MemberRickAndMortyEntityApiInfo>;

const baseUrl = "https://rickandmortyapi.com/api/character";

export const getCharactersCollection: GetItemsListFn<GetListItemsParams, Result> = async ({ name, params, page }) => {
    const urlParams: string[] = [];
    if (name) urlParams.push(`name=${name}`);
    if (page) urlParams.push(`page=${page}`);
    if (params && !name && !page) urlParams.push(params);

    const urlParamsString = urlParams.length > 0 ? `?${urlParams.join('&')}` : '';

    try {
        const response: Response = await fetch(`${baseUrl}${urlParamsString}`);
        if (response.status === 404 || !response.ok) {
            return { data: [], paginationInfo: { count: 0, pages: 0, next: null, prev: null } };
        }
        const result = (await response.json()) as GetMemberCollectionApiResponse;

        return {
            data: result.results.map(mapRickAndMortyCharacterToVm) || [],
            paginationInfo: result.info
        };
    } catch {
        return { data: [], paginationInfo: { count: 0, pages: 0, next: null, prev: null } };
    }
};
