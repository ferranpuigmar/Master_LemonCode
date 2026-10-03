import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { CharacterCollectionItemVm } from '../character-collection.vm';
import { CharacterCollectionComponent } from '../character-collection.component';
import * as classes from '../character-collection.styles';

interface Props {
  characterCollection: CharacterCollectionItemVm[];
  hasError: boolean;
  isLoading: boolean;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSelect: (id: number) => void;
}

export const CharacterCollectionResult: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    hasError,
    isLoading,
    page,
    totalPages,
    onPageChange,
    onSelect,
  } = props;

  if (hasError) {
    return (
      <Typography variant="body1">
        No se pudo cargar el listado de personajes
      </Typography>
    );
  }

  if (characterCollection.length === 0 && !isLoading) {
    return (
      <Typography variant="body1">
        No hay personajes que coincidan con la búsqueda
      </Typography>
    );
  }

  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onSelect={onSelect}
      />
      <Pagination
        className={classes.pagination}
        count={totalPages}
        page={page}
        color="primary"
        onChange={(_event, nextPage) => onPageChange(nextPage)}
      />
    </>
  );
};
