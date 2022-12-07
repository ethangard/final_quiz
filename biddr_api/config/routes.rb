Rails.application.routes.draw do
  # namespace :api do
  #   namespace :v1 do
  #     get 'sessions/create'
  #     get 'sessions/destroy'
  #     get 'users/current'
  #     get 'users/create'
  #   end
  # end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

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
