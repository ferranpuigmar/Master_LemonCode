import { MemberEntity } from "@src/common/pods/list/list.vm";
import { MemberRickAndMortyEntityApi } from "./list-rym.api-model";

export const mapRickAndMortyCharacterToVm = (
  member: MemberRickAndMortyEntityApi
): MemberEntity => ({
  id: member.id.toString(),
  name: member.name,
  avatarUrl: member.image,
});