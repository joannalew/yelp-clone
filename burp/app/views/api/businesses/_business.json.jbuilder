json.extract! business, :id, :business_name, :address, :city, :state, :zip_code, :latitude, :longitude, :phone, :website, :average_rating
json.photo url_for(business.photo)