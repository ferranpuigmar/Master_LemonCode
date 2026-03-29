import { MemberRickAndMortyEntityApiInfo } from "../../list-rym.api-model";

export const getTotalPagesFromApiInfo = (info: MemberRickAndMortyEntityApiInfo): number => info.pages;
