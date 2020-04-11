class EventsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    today = Event.where(date: Date.today)
    tomorrow = Event.where(date: Date.tomorrow)
    json = {}
    today.empty? ? json["today"] = {code: 500, msg: "No Events for today"} : json["today"] = {code: 200, events: showindex(today)}
    tomorrow.empty? ? json["tomorrow"] = {code: 500, msg: "No Events for tomorrow"} : json["tomorrow"] = {code: 200, events: showindex(tomorrow)}
    render json: json
  end

  private
  def showindex(events)
    events_protected = []
    events.each do |event,index|
      location = event.location.geocode
      location[:code] == 200 ? location = location[:short] : location = "TBD"
      event.photos.attached? ? photo = event.photos[0].service_url : photo = nil
      events_protected << {key: event.id ,photo: photo,name: event.name, date: event.date.strftime('%d-%m'),location: location, going: event.event_member.count, categories: event.categories}
    end
    return events_protected
  end
end
