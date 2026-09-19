import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { CharacterSearch } from './components/character-search.component';
import * as classes from './character-collection.styles';

export const CharacterCollectionContainer = () => {
  const {
    characterCollection,
    error,
    search,
    onSearchChange,
    page,
    totalPages,
    onPageChange,
  } = useCharacterCollection();
  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    navigate(linkRoutes.characterDetail(String(id)));
  };

  return (
    <div className={classes.container}>
      <CharacterSearch value={search} onChange={onSearchChange} />

      {error ? (
        <Typography variant="body1">
          No se pudo cargar el listado de personajes
        </Typography>
      ) : characterCollection.length === 0 ? (
        <Typography variant="body1">
          No hay personajes que coincidan con la búsqueda
        </Typography>
      ) : (
        <>
          <CharacterCollectionComponent
            characterCollection={characterCollection}
            onSelect={handleSelect}
          />
          <Pagination
            className={classes.pagination}
            count={totalPages}
            page={page}
            color="primary"
            onChange={(_event, nextPage) => onPageChange(nextPage)}
          />
        </>
      )}
    </div>
  );
};
