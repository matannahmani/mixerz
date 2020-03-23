class EventJoin < ApplicationRecord
  belongs_to :event
  belongs_to :user
  validates :pending, :status, presence: true
end
