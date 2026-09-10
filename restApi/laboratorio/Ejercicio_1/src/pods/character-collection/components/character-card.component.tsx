import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { CharacterCollectionItemVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterCollectionItemVm;
  onSelect: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onSelect } = props;

  return (
    <Card>
      <CardActionArea onClick={() => onSelect(character.id)}>
        <CardHeader
          title={character.name}
          subheader={`${character.status} - ${character.species}`}
        />
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              image={character.image}
              title={character.name}
              style={{ height: 0, paddingTop: '100%' }}
            />
            <Typography variant="subtitle1" gutterBottom>
              {character.originName}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
