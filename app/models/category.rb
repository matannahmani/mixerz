class Category < ApplicationRecord
  has_many :event
  validates :name, presence: true
end
