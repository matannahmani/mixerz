class Event < ApplicationRecord
  belongs_to :location
  belongs_to :user
  has_many :event_member
  validates :name,:description,:capacity,:date,:etype, presence: true
  has_many_attached :photos
end
