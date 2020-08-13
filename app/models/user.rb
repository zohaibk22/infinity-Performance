class User < ApplicationRecord
    has_secure_password

    validates :password, length: { minimum: 8 } ( message: "Password must be above 8 characters long")
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    
end
