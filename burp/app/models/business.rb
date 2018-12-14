class Business < ApplicationRecord
    validates :business_name,  presence: true
    validates :address, :city, :state, :zip_code, presence: true
    
end
