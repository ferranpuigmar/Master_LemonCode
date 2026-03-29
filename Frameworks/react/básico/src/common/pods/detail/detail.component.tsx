import React, { PropsWithChildren } from "react";
import { useQueryParam } from "@src/common/hooks/use-queryParam";
import { Link as RouterLink } from "react-router-dom";
import { Box, CircularProgress, Typography, Link } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface DetailComponentProps {
  isLoading: boolean;
  title: string;
  route: string;
  queryParamName: string;
  avatarSlot?: React.ReactNode;
  detailInfoSlot?: React.ReactNode;
};

export const DetailComponent: React.FC<PropsWithChildren<DetailComponentProps>> = ({
  isLoading,
  title,
  route,
  queryParamName,
  avatarSlot,
  detailInfoSlot
}) => {
  const { queryParam } = useQueryParam(queryParamName);
  const [urlBack, setUrlBack] = React.useState(route);

  React.useEffect(() => {
    if (queryParam) {
      setUrlBack(`${route}?${queryParamName}=${queryParam}`);
      return;
    }
    setUrlBack(route);
  }, [queryParam, route, queryParamName]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
        <Link component={RouterLink} to={urlBack} sx={{ color: "black", "&:hover svg": { color: "primary.main" } }}><ArrowBackIosIcon /></Link>
        <Typography variant="h3" component="h1" sx={{ paddingLeft: 2, margin: 0 }}>{title}</Typography>
      </Box>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '250px 1fr' },
                columnGap: { xs: 2, md: 6 },
                rowGap: 3,
                alignItems: 'start',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {avatarSlot}
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '100px 1fr' },
                    rowGap: 1.25,
                    columnGap: 2,
                }}
            >
                {detailInfoSlot}
            </Box>
        </Box>
      )}
    </Box>
  );
};