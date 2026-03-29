import React from 'react'
import { DEFAULT_MEMBER_FOR_GITHUB, getMemberCollection } from './list.api';
import SearchBar from '@src/common/components/list-search-bar';
import ListHeader from '@src/common/components/list-header';
import { useQueryParam } from '@src/common/hooks/use-queryParam';
import { getTotalPagesFromLinkHeader } from './hooks/use-pagination/use-pagination.utils';
import { useSearchableList, UseSearchableListOptions } from '@src/common/pods/list/hooks/use-searchable-list';
import { MemberEntity } from '@src/common/pods/list/list.vm';
import { PER_PAGE, QUERY_PARAM_NAME } from '@src/common/pods/list/list.constants';
import ListComponent from '@src/common/pods/list/list.component';
import { routes } from '@src/core/router';
import { Box, Container, Pagination, Stack } from '@mui/material';
import { GetListItemsParams } from '@src/common/pods/list/list.api';

const DEFAULT_SEARCH_PARAMS = `per_page=${PER_PAGE}&page=1`;

const options: UseSearchableListOptions<MemberEntity, GetListItemsParams, string | undefined> = {
    fetchCB: getMemberCollection,
    getTotalPagesCB: getTotalPagesFromLinkHeader
};

const ListGithubContainer = () => {
    const {
        items,
        debouncedSearch,
        search,
        isLoading,
        totalPages,
    } = useSearchableList(options);

    const { queryParam, setQueryParamInUrl } = useQueryParam(QUERY_PARAM_NAME);
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const handleOnSearch = (term: string) => {
        setSearchTerm(term);
        setQueryParamInUrl(term || '');
        debouncedSearch({ name: term, params: `per_page=${PER_PAGE}&page=1` });
    };

    const handlePagination = async (_event: React.ChangeEvent<unknown>, page: number) => {
        await search({ name: searchTerm, params: `per_page=${PER_PAGE}&page=${page}` });
        setCurrentPage(page);
    };

    React.useEffect(() => {
        if (queryParam && searchTerm !== queryParam) {
            setSearchTerm(queryParam);
            search({ name: queryParam, params: DEFAULT_SEARCH_PARAMS });
            return;
        }

        if (!searchTerm && !queryParam) {
            search({ name: DEFAULT_MEMBER_FOR_GITHUB, params: DEFAULT_SEARCH_PARAMS });
            setSearchTerm(DEFAULT_MEMBER_FOR_GITHUB);
            setQueryParamInUrl(DEFAULT_MEMBER_FOR_GITHUB);
            return;
        }
    }, []);

    return (
        <Stack spacing={2}>
            <SearchBar
                onSearch={handleOnSearch}
                initialSearchTerm={searchTerm}
                defaultSearchTerm={DEFAULT_MEMBER_FOR_GITHUB}
            />
            <Container maxWidth="xl" disableGutters>
                <Box className='content'>
                    <Stack spacing={1.5}>
                        <ListHeader />
                        <ListComponent members={items} searchTerm={searchTerm} isLoading={isLoading} route={routes.detailsGithub} paramIdentifier="name" />
                    </Stack>
                </Box>
            </Container>
            <Stack spacing={1.5}>
                <Pagination count={totalPages} page={currentPage} onChange={handlePagination} />
            </Stack>
        </Stack>
    )
}

export default ListGithubContainer