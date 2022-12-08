Rails.application.routes.draw do

  resources :users, only: [:new, :create, :show]

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only: [:index, :show, :create] 
      resources :bids, only: [:show, :create, :index]
      resource :session, only: [:create, :destroy] 
      
      resources :users, only: [:create] do
       get :current, on: :collection       
      end         
    
      end
  end
end
