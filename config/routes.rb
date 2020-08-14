Rails.application.routes.draw do
  resources :modifications
  resources :vehicles
  resources :users

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  get '/modifications/:modification_id/vehicles/:id', to: 'custom#add_modification'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
