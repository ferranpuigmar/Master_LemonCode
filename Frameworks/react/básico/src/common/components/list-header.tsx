import { Grid, Typography } from '@mui/material';

const ListHeader = () => {
  return (
    <Grid
      container
      columnSpacing={2.5}
      rowSpacing={1.25}
      sx={{
        alignItems: 'center',
        bgcolor: '#2f4858',
        color: 'common.white',
        fontWeight: 700,
        px: 2,
        py: 1,
      }}
    >
      <Grid sx={{ width: 80, flexShrink: 0 }}>
        <Typography variant="body2" fontWeight={700}>
          Avatar
        </Typography>
      </Grid>
      <Grid sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="body2" fontWeight={700}>
          Id
        </Typography>
      </Grid>
      <Grid sx={{ flex: 8, minWidth: 0 }}>
        <Typography variant="body2" fontWeight={700}>
          Name
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ListHeader;