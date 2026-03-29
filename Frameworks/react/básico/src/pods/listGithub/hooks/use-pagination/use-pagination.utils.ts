export const getTotalPagesFromLinkHeader = (links: string | undefined) => {
    let totalPages = 0;
    let prevPage = 0;
    let nextPage = 0;

    if (!links) return 0;

    const linkArray = links.split(',');

    linkArray.forEach(link => {
        const match = link.match(/<([^>]+)>;\s*rel="([^"]+)"/);

        if (!match) return;

        const url = match[1];
        const rel = match[2];

        if (!url || !rel) return;

        const urlParams = new URLSearchParams(url.split('?')[1]);
        const pageParam = urlParams.get('page');

        if (!pageParam) return;

        const pageNumber = parseInt(pageParam, 10);

        if (rel === 'last') {
            totalPages = isNaN(pageNumber) ? 0 : pageNumber;
        }

        if (rel === 'prev') {
            prevPage = isNaN(pageNumber) ? 0 : pageNumber;
        }

        if (rel === 'next') {
            nextPage = isNaN(pageNumber) ? 0 : pageNumber;
        }
    });

    if (totalPages === 0 && nextPage > 0) {
        totalPages = nextPage - 1;
    }

    if (totalPages === 0 && prevPage > 0) {
        totalPages = prevPage + 1;
    }

    if (totalPages === 0) {
        totalPages = 1;
    }

    return totalPages;
}