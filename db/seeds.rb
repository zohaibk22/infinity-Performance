# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Modification.destroy_all
Vehicle.destroy_all
User.destroy_all


@admin = User.create!(username: 'admin', email: 'zohaib@admin.com', password: '12345678')
puts "#{User.count} users created"

@first_car = Vehicle.create!(vehicle_type: 'car', make: "Ford", model: 'Mustang', year: '2019', 
    engine_type: '4 cylinder ecoboost', 
    description: "My first car. It is my daily driver and project car",
    color: 'red',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6tNGoYgUUaCH8HOGcitApMYeHr-VMbTmY5g&usqp=CAU',
    user: @admin
)
puts "#{Vehicle.count} vehicles created"


@cold_air_intake = Modification.create!(
    name: 'cold air intake',
    brand_name: 'cobb',
    mod_type: true,
    performance_gain: 25,
    cost: 500,
    vehicle: @first_car
)

puts "#{Modification.count} modifications created"

@first_car.modifications.push(@cold_air_intake)