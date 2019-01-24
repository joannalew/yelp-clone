export const selectBusiness = ({ businesses }, businessId) => {
    return businesses[businessId] || { reviewIds: [], categoryIds: [] };
};

export const selectReviewsForBusiness = ({ reviews }, business) => {
    return business.reviewIds.map(reviewId => reviews[reviewId]);
};

export const selectCategoriesForBusiness = ({ categories }, business) => {
    return business.categoryIds.map(categoryId => categories[categoryId]);
};

export const asArray = ({ businesses }) => (
    Object.keys(businesses).map(key => businesses[key])
);

