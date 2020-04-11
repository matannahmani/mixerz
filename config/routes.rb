Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'react', to: "pages#react"
  get 'eventapi', to: "events#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
