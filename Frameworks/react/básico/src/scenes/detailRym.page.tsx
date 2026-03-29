import { DetailLayout } from "@src/layouts/detail.layout";
import { RickAndMortyDetailContainer } from "@src/pods/detailRym/detail-rym.container";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailRymPage: React.FC = () => {
  const { id } = useParams();
  
  return (
    <DetailLayout>
      <RickAndMortyDetailContainer id={id!} />
    </DetailLayout>
  );
};
