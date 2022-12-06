Rails.application.routes.draw do
  resources :apartments, only: [:index]
  
end
