json.extract! event, :id, :name, :description, :capacity, :date, :user_id, :etype, :categories, :latitude, :longitude, :address, :created_at, :updated_at
json.url event_url(event, format: :json)
