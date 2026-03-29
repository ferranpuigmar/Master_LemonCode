export interface MemberGithubDetailEntity {
  id: string;
  name: string;
  login: string;
  company: string;
  bio: string;
  avatarUrl: string;
}

export const createDefaultMemberGithubDetail = (): MemberGithubDetailEntity => ({
  id: "",
  name: "",
  login: "",
  company: "",
  bio: "",
  avatarUrl: "",
});
