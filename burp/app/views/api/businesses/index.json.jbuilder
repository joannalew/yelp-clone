@businesses.each do |business|
    json.businesses do
        json.set! business.id do
            json.partial! 'business', business: business
            json.reviewIds business.reviews.pluck(:id)
        end
    end

    business.reviews.each do |review|
        json.reviews do
            json.set! review.id do
                json.partial! 'api/reviews/review', review: review
            end
        end
    end
end