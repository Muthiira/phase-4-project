# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: 'Caleb')
10.times do
	
Product.create(name: Faker::ElectricalComponents.electromechanical, price:rand(20..100), quantity: rand(20..150), sold:rand(20..100), added:rand(20..80), user_id: user.id)
end
