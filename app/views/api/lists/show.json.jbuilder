json.extract! @list, :id, :title
json.cards do 
	json.array! @list.cards do |card|
		json.extract! card, :id, :title, :list_id, :ord, :description
	end
end
