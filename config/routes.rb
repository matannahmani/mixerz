Rails.application.routes.draw do
  # devise_for :users
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }
  root to: 'pages#react'
  resources :events
  get 'react', to: "pages#react"
  get 'match', to: "pages#match"
  get 'eventapi', to: "events#index"
  get 'pepolenearbyapi', to: "events#nearby"
  get 'session', to: "pages#react"
  get 'signup', to: "pages#react"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
