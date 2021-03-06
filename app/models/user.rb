class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many_attached :photos
  has_many :sender, :class_name => 'Connection', :foreign_key => 'sender_id'
  has_many :receiver, :class_name => 'Connection', :foreign_key => 'receiver_id'
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable,
         jwt_revocation_strategy: JWTBlacklist

  # validations
  validates :fullname, :birthday, :home, :bio, :gender, presence: true

  # setting up some stuff
    # here should grab user location and set it

    # after should create rating based on how many photos user has plus how many letters inside bio
end
