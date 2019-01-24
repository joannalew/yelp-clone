class Category < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :business_categories,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :BusinessCategory

    has_many :businesses,
        through: :business_categories,
        source: :business
end
