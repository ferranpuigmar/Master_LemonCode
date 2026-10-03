import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { ApiError, toApiError } from '#core/api';
import * as api from './api';
import { createEmptyCharacter, CharacterVm } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

const getErrorMessage = (error: ApiError): string => {
  switch (error.kind) {
    case 'notFound':
      return 'No se encontró el personaje';
    case 'network':
      return 'No se pudo conectar con el servidor';
    default:
      return 'Ha ocurrido un error inesperado';
  }
};

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacter()
  );
  const [error, setError] = React.useState<ApiError | null>(null);
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    try {
      setError(null);
      const apiCharacter = await api.getCharacter(id ?? '');
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } catch (e) {
      setError(e instanceof ApiError ? e : toApiError(e));
    }
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [id]);

  if (error) {
    return <Typography variant="body1">{getErrorMessage(error)}</Typography>;
  }

  return <CharacterComponent character={character} />;
};
