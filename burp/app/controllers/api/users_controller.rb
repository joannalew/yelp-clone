class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      @user.photo.attach(io: File.open('./app/assets/images/user/demo.png'), filename: 'demo.png')
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email, :zip_code)
  end
end
