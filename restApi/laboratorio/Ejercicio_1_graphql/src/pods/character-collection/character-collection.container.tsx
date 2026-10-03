import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterSearch } from './components/character-search.component';
import { CharacterCollectionResult } from './components/character-collection-result.component';
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
    isLoading,
  } = useCharacterCollection();
  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    navigate(linkRoutes.characterDetail(String(id)));
  };

  const isFirstLoad = isLoading && characterCollection.length === 0;

  return (
    <div className={classes.container}>
      <CharacterSearch value={search} onChange={onSearchChange} />

      {isLoading && <Typography variant="body1">Cargando...</Typography>}

      {!isFirstLoad && (
        <CharacterCollectionResult
          characterCollection={characterCollection}
          hasError={error !== null}
          isLoading={isLoading}
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};
