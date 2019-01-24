class Business < ApplicationRecord
    validates :business_name,  presence: true
    validates :address, :city, :state, :zip_code, presence: true

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review

    has_many :business_categories,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :BusinessCategory

    has_many :categories,
        through: :business_categories,
        source: :category

    has_one_attached :photo
    has_many_attached :pics

    def average_rating
        reviews.average(:rating)
    end

end
