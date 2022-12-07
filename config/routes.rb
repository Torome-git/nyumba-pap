Rails.application.routes.draw do
  resources :apartments, only: [:index]
  resources :client, only: [:index, :show] 
  resources :landlords, only: [:index, :show, :create, :update, :destroy]
end
