class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      login(@user)
      redirect_to "/"
    else
      redirect_to new_session_url
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  private

  def user_params
    params.require(:user).permit(:password, :session_token, :email)
  end

end
