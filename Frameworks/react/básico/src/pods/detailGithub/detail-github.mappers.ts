import { MemberGithubDetailApiModel } from "./detail-github.api-model";
import { MemberGithubDetailEntity } from "./detail-github.vm";

export const mapMemberFromApiToVm = (data: MemberGithubDetailApiModel): MemberGithubDetailEntity => ({
    id: String(data.id),
    name: data.name ?? '',
    company: data.company ?? '',
    bio: data.bio ?? '',
    avatarUrl: data.avatar_url,
    login: data.login ?? ''
});