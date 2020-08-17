class Vehicle < ApplicationRecord
  belongs_to :user
  has_many :modifications, dependent: :destroy

  # can: update, Vehicle, user_id: @user.id
  # can: read, Vehicle, user_id: @user.id
  # can: destroy, Vehicle, user_id: @user.id
  
end
