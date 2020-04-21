Rails.application.routes.draw do
  # devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
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
  get 'react', to: "pages#react"
  get 'match', to: "pages#react"
  get 'eventapi', to: "events#index"
  get 'pepolenearbyapi', to: "events#nearby"
  get 'profile', to: "pages#react"
  get 'signin', to: "pages#react"
  get 'session', to: "pages#react"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
