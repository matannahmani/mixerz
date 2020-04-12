Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#react'
  get 'react', to: "pages#react"
  get 'match', to: "pages#match"
  get 'eventapi', to: "events#index"
  get 'pepolenearbyapi', to: "events#nearby"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
