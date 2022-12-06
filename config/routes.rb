Rails.application.routes.draw do
  resources :apartments, only: [:index]
  resources :client, only: [:index, :show] 
end
