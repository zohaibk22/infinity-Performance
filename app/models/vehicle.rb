class Vehicle < ApplicationRecord
  belongs_to :user
  has_many :modifications, dependent: :destroy
end
