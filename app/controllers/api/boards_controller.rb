class Api::BoardsController < ApplicationController
	def new
		@board = Board.new
		render json: @board
	end

	def create
		@board = Board.new(board_params)
		@board.user_id = current_user.id
		if @board.save
			render json: @board
		else
			render json: @board.errors.full_messages
		end
	end

	def show
		@board = Board.find(params[:id])
	end

	def destroy
		@board = Board.find(params[:id])
		@board.destroy
		render json: @board
	end

	def index
		@boards = Board.all
		render json: @boards
	end


	private

	def board_params
		params.require(:board).permit(:title)
	end


end

