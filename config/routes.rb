Rails.application.routes.draw do
  root to: "static_pages#index"
  resources :api do 
	  resources :boards
	  # resources :cards
	  # resources :lists
	  # resources :items
  end
  
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  
end
