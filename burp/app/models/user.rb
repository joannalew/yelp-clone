class User < ApplicationRecord
  validates :first_name, :last_name, :email, :zip_code, presence: true
  validates :password_digest, :session_token, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token

  def password=(pword)
    @password = pword
    self.password_digest = BCrypt::Password.create(pword)
  end

  def isPassword?(pword)
    BCrypt::Password.new(self.password_digest).is_password?(pword)
  end

  def self.find_by_credentials(uname, pword)
    user = User.find_by(username: uname)
    return nil unless user
    user.isPassword?(pword) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end
end
