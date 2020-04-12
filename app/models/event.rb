class Event < ApplicationRecord
  belongs_to :user
  has_many :event_member
  validates :name,:description,:capacity,:date,:etype, presence: true
  has_many_attached :photos
  geocoded_by :location
  def geocode
    location = Geocoder.search([self.latitude,self.longitude])
    if location[0].data["error"].nil?
      return {code: 200, short: location[0].data["display_name"].split(',')[0], full: location[0].data["display_name"]}
    else
      return {code: 500, msg: "Could'nt resolve the cordinates"}
    end
  end
end
