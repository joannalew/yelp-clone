class Business < ApplicationRecord
    validates :business_name,  presence: true
    validates :address, :city, :state, :zip_code, presence: true

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review

    has_one_attached :photo

    def average_rating
        reviews.average(:rating)
    end
end
