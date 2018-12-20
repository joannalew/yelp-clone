export const searchBusinesses = query => (
    $.ajax({
        method: 'GET',
        url: '/api/businesses/search',
        data: { query }
    })
);