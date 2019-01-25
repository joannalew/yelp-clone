export const searchBusinesses = query => (
    $.ajax({
        method: 'GET',
        url: '/api/businesses/search',
        data: { query }
    })
);

export const searchCategories = query => (
    $.ajax({
        method: 'GET',
        url: '/api/categories/search',
        data: { query }
    })
);