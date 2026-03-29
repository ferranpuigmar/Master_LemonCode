const MAX_PAGINATION_LABELS = 10;

const usePagination = (totalItems: number, page: number) => {
    const paginationList: number[] = [];
    const totalPagesCount = totalItems;
    let nextPage = page < totalPagesCount ? page + 1 : null;
    let prevPage = page > 1 ? page - 1 : null;
    let currentPage = page;


    if (totalPagesCount <= MAX_PAGINATION_LABELS) {
        for (let i = 1; i <= totalPagesCount; i++) {
            paginationList.push(i);
        }
        return {
            pages: paginationList,
            nextPage, 
            prevPage
        };
    }

    // Primera página
    paginationList.push(1);

    // Cálculo de los límites para los números centrales
    let start = Math.max(2, currentPage - 3);
    let end = Math.min(totalPagesCount - 1, currentPage + 3);

    if (currentPage <= 4) {
        end = MAX_PAGINATION_LABELS - 2;
    }
    if (currentPage >= totalPagesCount - 3) {
        start = totalPagesCount - (MAX_PAGINATION_LABELS - 3);
    }

    // Puntos suspensivos después del primero
    if (start > 2) {
        paginationList.push(-1);
    }

    // Números centrales
    for (let i = start; i <= end; i++) {
        paginationList.push(i);
    }

    // Puntos suspensivos antes del último
    if (end < totalPagesCount - 1) {
        paginationList.push(-1);
    }

    // Última página
    paginationList.push(totalPagesCount);

    return { pages: paginationList, nextPage, prevPage };
}

export default usePagination