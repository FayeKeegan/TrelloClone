json.extract! @board, :id, :title
json.lists do 
	json.array! @board.lists do |list|
		json.extract! list, :title, :board_id, :ord
	end
end
