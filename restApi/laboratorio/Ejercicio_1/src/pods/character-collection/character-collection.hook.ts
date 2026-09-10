import * as React from 'react';
import { useDebounce } from 'use-debounce';
import { ApiError, toApiError } from '#core/api';
import { mapToCollection } from '#common/mappers';
import { CharacterCollectionItemVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterCollectionItemVm[]
  >([]);
  const [search, setSearch] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [error, setError] = React.useState<ApiError | null>(null);

  const [debouncedSearch] = useDebounce(search, 500);

  const loadCharacterCollection = async () => {
    try {
      setError(null);
      const result = await getCharacterCollection({
        page,
        name: debouncedSearch || undefined,
      });

      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
      setTotalPages(result.info.pages);
    } catch (e) {
      const apiError = e instanceof ApiError ? e : toApiError(e);

      if (apiError.kind === 'notFound') {
        setCharacterCollection([]);
        setTotalPages(0);
        return;
      }

      setError(apiError);
    }
  };

  const appliedSearch = React.useRef<string>(debouncedSearch);

  React.useEffect(() => {
    const isNewSearch = appliedSearch.current !== debouncedSearch;
    appliedSearch.current = debouncedSearch;

    if (isNewSearch && page !== 1) {
      setPage(1);
      return;
    }

    loadCharacterCollection();
  }, [debouncedSearch, page]);

  return {
    characterCollection,
    error,
    search,
    onSearchChange: setSearch,
    page,
    totalPages,
    onPageChange: setPage,
  };
};
