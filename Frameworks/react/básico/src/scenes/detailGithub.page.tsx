import { DetailLayout } from "@src/layouts/detail.layout";
import { GithubDetailContainer } from "@src/pods/detailGithub/detail-github.container";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailGithubPage: React.FC = () => {
  const { id } = useParams();
  
  return (
    <DetailLayout>
      <GithubDetailContainer id={id!} />
    </DetailLayout>
  );
};
