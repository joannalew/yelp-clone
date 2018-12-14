class Business < ApplicationRecord
    validates :business_name,  presence: true
    validates :address, :city, :state, :zip_code, presence: true

    has_many :reviews

    def average_rating
        reviews.averate(:rating)
    end
end
