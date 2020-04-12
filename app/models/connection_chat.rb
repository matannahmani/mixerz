class ConnectionChat < ApplicationRecord
  belongs_to :connection
  validates :message, presence: true
end
