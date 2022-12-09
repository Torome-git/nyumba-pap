Rails.application.routes.draw do
  resources :apartments, only: [:index]
  resources :client, only: [:index, :show, :create] 
  resources :landlords, only: [:index, :show, :create, :update, :destroy]
  post "/signup", to: "sessions#create"
  get "/me", to: "sessions#show"
end
