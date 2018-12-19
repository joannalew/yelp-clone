json.extract! business, :id, :business_name, :address, :city, :state, :zip_code, :latitude, :longitude, :phone, :website, :price, :average_rating
json.photo url_for(business.photo)