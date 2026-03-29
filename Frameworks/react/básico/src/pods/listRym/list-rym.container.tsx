import React from 'react'
import ListPagination from '@src/common/components/list-pagination/list-pagination';
import SearchBar from '@src/common/components/list-search-bar';
import ListHeader from '@src/common/components/list-header';
import { useQueryParam } from '@src/common/hooks/use-queryParam';
import { MemberEntity } from '@src/common/pods/list/list.vm';
import { MemberRickAndMortyEntityApiInfo } from './list-rym.api-model';
import { ListStrategy, useSearchableList } from '@src/common/pods/list/hooks/use-searchable-list';
import { getCharactersCollection } from './list-rym.api';
import { getTotalPagesFromApiInfo } from './hooks/use-pagination/use-pagination.utils';
import { QUERY_PARAM_NAME } from '@src/common/pods/list/list.constants';
import ListComponent from '@src/common/pods/list/list.component';
import { routes } from '@src/core/router/routes';
import { GetListItemsParams } from '@src/common/pods/list/list.api';
import { Box, Container, Stack } from '@mui/material';

const strategy: ListStrategy<MemberEntity, GetListItemsParams, MemberRickAndMortyEntityApiInfo> = {
    fetchCB: getCharactersCollection,
    getTotalPagesCB: getTotalPagesFromApiInfo
};

const ListRymContainer = () => {
    const {
        items,
        debouncedSearch,
        search,
        isLoading,
        totalPages
    } = useSearchableList(strategy);

    const { queryParam, setQueryParamInUrl } = useQueryParam(QUERY_PARAM_NAME);
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const handleOnSearch = (term: string) => {
        setSearchTerm(term);
        setQueryParamInUrl(term || '');
        debouncedSearch({ name: term });
    };

    const handlePagination = async (page: number) => {
        await search({ name: searchTerm, page: page.toString() });
        setCurrentPage(page);
    };

    React.useEffect(() => {
        if (queryParam && searchTerm !== queryParam) {
            setSearchTerm(queryParam);
            search({ name: queryParam });
            return;
        }

        if (!searchTerm && !queryParam) {
            search();

            return;
        }
    }, [queryParam]);

    return (
        <Stack spacing={2}>
            <SearchBar onSearch={handleOnSearch} initialSearchTerm={searchTerm} />
            <Container maxWidth="xl" disableGutters>
                <Box className='content'>
                    <Stack spacing={1.5}>
                        <ListHeader />
                        <ListComponent members={items} searchTerm={searchTerm} isLoading={isLoading} route={routes.detailsRym} paramIdentifier='id' />
                    </Stack>
                </Box>
                <Box sx={{ mb: 6 }}>
                    {/* Este componente es custom, lo realize antes de ver que era más fácil hacerlo con MUI :) */}
                    <ListPagination 
                        onClick={handlePagination} 
                        isLoading={isLoading} 
                        totalItems={totalPages} 
                        page={currentPage} 
                    />
                </Box>
             </Container>
        </Stack>
    )
}

export default ListRymContainer