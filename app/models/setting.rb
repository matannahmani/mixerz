class Setting < ApplicationRecord
  has_many :user
  validates :name, :active, presence: true
  validates :name, uniqueness: true
end
