import usePagination from '@src/common/hooks/use-pagination';
import styles from './list-pagination.module.css';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ListPaginationProps {
    totalItems: number;
    page: number;
    onClick?: (page: number) => void;
    isLoading: boolean;
}

const ListPagination = ({ totalItems, page, onClick, isLoading }: ListPaginationProps) => {
    const [currentPage, setCurrentPage] = React.useState(page);
    const { pages, nextPage, prevPage } = usePagination(totalItems, currentPage);

    const handleClick = (page: number) => {
        setCurrentPage(page);
        onClick?.(page);
    };

    if (isLoading) return null;

    return (
        <div className={styles.pagination}>
            <button
                className={`${styles.button} ${styles.navButton}`}
                disabled={!prevPage}
                onClick={() => handleClick(prevPage ?? 0)}
            >
                <ArrowBackIcon />
            </button>

            {pages.map((page, index) => {
                if (page === -1) {
                    return <span className={styles.ellipsis} key={index}>...</span>
                }
                return (
                    <button
                        className={`${styles.button} ${page === currentPage ? styles.active : ''}`}
                        key={index}
                        onClick={() => handleClick(page)}
                    >
                        {page}
                    </button>
                )
            })}
            <button
                disabled={!nextPage}
                className={`${styles.button} ${styles.navButton}`}
                onClick={() => handleClick(nextPage ?? 0)}
            >
                <ArrowForwardIcon />
            </button>
        </div>
    )
}

export default ListPagination