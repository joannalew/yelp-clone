class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      login(user)
      render :new           # go where after log in?
    else
      flash[:errors] = user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
