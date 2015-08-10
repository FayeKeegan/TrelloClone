class Api::CardsController < ApplicationController
	def show
		@card = Card.find(params[:id])
		render json: @card
	end

	def index
		@cards = Card.all
		render json: @cards
	end

	def new
		@card = Card.new()
		render json: @card
	end

	def create
		@card = Card.new(card_params)
		@card.save
		render json: @card
	end

	def destroy
		@card = Card.find(params[:id])
		@card.destroy!
		render json: @card
	end

	private

	def card_params
		params.require(:card).permit(:list_id, :title, :ord, :description)
	end
end
