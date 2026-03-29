import React from "react";
import { getDetailInfo } from "./detail-github.api";
import { createDefaultMemberGithubDetail } from "./detail-github.vm";
import { useDetailInfo } from "@src/common/pods/detail/hooks/useDetailInfo";
import { QUERY_PARAM_NAME } from "@src/common/pods/list/list.constants";
import { routes } from "@src/core/router/routes";
import { DetailComponent } from "@src/common/pods/detail/detail.component";
import AvatarComponent from "@src/common/pods/detail/components/avatar";
import DetailInfo from "./components/detail-info";

interface Props {
  id: string;
}

export const GithubDetailContainer: React.FC<Props> = ({ id }) => {
  const { member, isLoading } = useDetailInfo(id, getDetailInfo, createDefaultMemberGithubDetail());

  return (
    <DetailComponent 
      isLoading={isLoading} 
      title={`Detalle ficha`} 
      route={routes.listGithub} 
      queryParamName={QUERY_PARAM_NAME}
      avatarSlot={<AvatarComponent avatarUrl={member.avatarUrl} name={member.name} />}
      detailInfoSlot={<DetailInfo member={member} />}
    />
  );
};
