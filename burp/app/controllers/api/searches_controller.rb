class Api::SearchesController < ApplicationController
    def business_search
        query = params[:query][:query]
        queryStr = query.split(' ').map do |str|
            str = "LOWER(business_name) LIKE '%#{str.downcase}%'"
        end.join(" OR ");

        location = params[:query][:location]
        location = location.split(',')[0]
        locationStr = "LOWER(city) = '#{location.downcase}'"

        @businesses = Business.where('(' + queryStr + ') AND (' + locationStr + ')')
        render '/api/businesses/index'
    end


end
