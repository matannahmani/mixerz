class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many_attached :photos
  has_many :sender, :class_name => 'Connection', :foreign_key => 'sender_id'
  has_many :receiver, :class_name => 'Connection', :foreign_key => 'receiver_id'
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         # :omniauthable, omniauth_providers: %i[facebook],
         :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist
  # validations
  validates :fullname, :birthday, :home, :bio, :gender, presence: true

  # setting up some stuff
    # here should grab user location and set it

    # after should create rating based on how many photos user has plus how many letters inside bio
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      binding.pry
      user.name = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails,
      # uncomment the line below to skip the confirmation emails.
      # user.skip_confirmation!
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end
end
