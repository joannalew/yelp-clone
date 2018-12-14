class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
        render :index
    end

    def create
        @business = Business.create!(business_params)
        render :show
    end

    def show
        @business = Business.find(params[:id])
        render :show
    end

    def business_params
        params.require(:business).permit(:business_name, :address, :city, :state, :zip_code, :latitude, :longitude, :phone, :website)
    end
end