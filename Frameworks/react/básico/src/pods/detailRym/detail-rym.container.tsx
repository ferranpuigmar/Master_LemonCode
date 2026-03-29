import React from "react";
import { useDetailInfo } from "@src/common/pods/detail/hooks/useDetailInfo";
import { getDetailInfo } from "./detail-rym.api";
import { createDefaultMemberRyMDetail } from "./detail-rym.vm";
import { routes } from "@src/core/router";
import { DetailComponent } from "@src/common/pods/detail/detail.component";
import { QUERY_PARAM_NAME } from "@src/common/pods/list/list.constants";
import AvatarComponent from "@src/common/pods/detail/components/avatar";
import DetailInfo from "./components/detail-info";

interface Props {
  id: string;
}

export const RickAndMortyDetailContainer: React.FC<Props> = ({ id }) => {
  const { member, isLoading } = useDetailInfo(id, getDetailInfo, createDefaultMemberRyMDetail());

  return (
    <DetailComponent
      isLoading={isLoading}
      title={`Detalle ficha`}
      route={routes.listRym}
      queryParamName={QUERY_PARAM_NAME}
      avatarSlot={<AvatarComponent avatarUrl={member.image} name={member.name} />}
      detailInfoSlot={<DetailInfo member={member} />}
    />
  );
};
