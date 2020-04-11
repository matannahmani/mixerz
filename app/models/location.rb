class Location < ApplicationRecord
  has_many :user
  validates :longitude,:latitude, presence: true

  def cords
    [self.latitude,self.longitude]
  end

  def geocode
    location = Geocoder.search(self.cords)
    if location[0].data["error"].nil?
      return {code: 200, short: location[0].data["display_name"].split(',')[0], full: location[0].data["display_name"]}
    else
      return {code: 500, msg: "Could'nt resolve the cordinates"}
    end
  end
end
