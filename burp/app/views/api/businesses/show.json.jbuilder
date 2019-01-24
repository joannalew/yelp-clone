json.business do
    json.partial! '/api/businesses/business', business: @business
    json.reviewIds @business.reviews.pluck(:id)
    json.categoryIds @business.categories.pluck(:id)
    json.picLinks @business.pics.map { |pic| url_for(pic) }
end

@business.categories.each do |category|
    json.categories do
        json.set! category.id do
            json.partial! '/api/categories/category', category: category
        end
    end
end

@business.reviews.includes(:author).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! '/api/reviews/review', review: review
        end
    end

    json.authors do 
        json.set! review.author.id do 
            json.partial! '/api/users/user', user: review.author
        end
    end
end