class Event < ApplicationRecord
  belongs_to :location
  belongs_to :user
  validates :name,:description,:capacity,:date,:etype, presence: true
end
