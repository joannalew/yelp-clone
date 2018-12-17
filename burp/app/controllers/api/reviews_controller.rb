class Api::ReviewsController < ApplicationController
    before_action :required_logged_in

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.business_id = params[:business_id]

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            render :show
            #render "api/business/#{@review.business_id}" 
        else 
            render json: @review.errors.full_messages, status: 422
    end

    private
    def review_params
        params.require(:review).permit(:rating, :body)
    end
end
