import { MemberEntity } from "@src/common/pods/list/list.vm";
import { MemberGithubEntityApi } from "./list.api-model";

export const mapMemberGithubApiToVm = (
  member: MemberGithubEntityApi
): MemberEntity => ({
  id: member.id.toString(),
  name: member.login,
  avatarUrl: member.avatar_url,
});