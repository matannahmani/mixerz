class Connection < ApplicationRecord
  belongs_to :sender, :class_name => 'User'
  belongs_to :receiver, :class_name => 'User'
  validates  :sender, :receiver, presence: true
end
