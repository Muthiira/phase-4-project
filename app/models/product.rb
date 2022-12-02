class Product < ApplicationRecord
	has_one :user
	validates :name, presence: true, uniqueness: true
	validates :quantity, presence: true
	validates :price, presence: true
end