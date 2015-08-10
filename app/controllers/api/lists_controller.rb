class Api::ListsController < ApplicationController
	def show
		@list = List.find(params[:id])
	end

	def index
		@lists = List.all
		render json: @lists
	end


	def new
		@list = List.new()
		render json: @list
	end

	def create
		@list = List.new(list_params)
		@list.save
		render json: @list
	end

	def destroy
		@list = List.find(params[:id])
		@list.destroy!
		render json: @list
	end

	private

	def list_params
		params.require(:list).permit(:board_id, :title, :ord)
	end
end
