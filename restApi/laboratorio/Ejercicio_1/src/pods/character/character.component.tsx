import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CharacterVm } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: CharacterVm;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        className={classes.image}
      />
      <CardContent>
        <Typography variant="h5">{character.name}</Typography>
        <Typography variant="body2">
          {character.status} - {character.species}
        </Typography>
        <Typography variant="body2">Gender: {character.gender}</Typography>
        <Typography variant="body2">Origin: {character.originName}</Typography>
        <Typography variant="body2">
          Last known location: {character.locationName}
        </Typography>
        <Typography variant="body2">
          Episodes: {character.episodeCount}
        </Typography>
      </CardContent>
    </Card>
  );
};
