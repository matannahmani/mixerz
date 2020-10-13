class Event < ApplicationRecord
  # include PgSearch
  # pg_search_scope :search_details, against: [:name, :description]
  belongs_to :user
  after_validation :geocode
  has_many :event_member
  validates :name,:description,:capacity,:date,:etype, presence: true
  has_many_attached :photos
  geocoded_by :address
  # before_validation do
  #   location = Geocoder.search([self.latitude,self.longitude])
  #   if location[]
  #   if location[0].data["error"].nil?
  #     self.address =  location[0].data['display_name']
  #   else
  #     self.delete
  #   end
  # end

  def geoshort
    self.address.split(',')[0]
  end
  # def geocode
  #   location = Geocoder.search([self.latitude,self.longitude])
  #   if location[0].data["error"].nil?
  #     return {code: 200, short: location[0].data["display_name"].split(',')[0], full: location[0].data["display_name"]}
  #   else
  #     return {code: 500, msg: "Could'nt resolve the cordinates"}
  #   end
  # end
end
