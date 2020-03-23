class Location < ApplicationRecord
  has_many :user
  validates :longitude,:latitude, presence: true
end
