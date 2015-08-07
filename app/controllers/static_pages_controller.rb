class StaticPagesController < ApplicationController

	def index
		redirect_to new_session_url unless !!current_user
		render :root
	end

end
