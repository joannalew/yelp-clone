json.extract! user, :id, :email, :first_name, :last_name, :zip_code
json.photo url_for(user.photo)