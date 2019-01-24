Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    get 'businesses/search', to: 'searches#business_search'
    get 'categories/search', to: 'searches#category_search'
    resources :businesses, only: [:create, :index, :show]
    resources :reviews, only: [:create, :update, :destroy]
    resources :categories, only: [:create]
  end

  root "static_pages#root"
end
