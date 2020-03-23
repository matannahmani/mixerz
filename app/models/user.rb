class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :sender, :class_name => 'Connection', :foreign_key => 'sender_id'
  has_many :receiver, :class_name => 'Connection', :foreign_key => 'receiver_id'
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
