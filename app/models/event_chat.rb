class EventChat < ApplicationRecord
  belongs_to :event_member
  validates :message, presence: true
end
