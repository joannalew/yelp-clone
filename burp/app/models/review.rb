class Review < ApplicationRecord
    validates :body, :rating, presence: true
    validates :rating, inclusion: { in: (1..5) }

    belongs_to :business
    belongs_to :user
end
