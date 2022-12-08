# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Bid.destroy_all
Auction.destroy_all
User.destroy_all

PASSWORD = "123"

test_user = 
  User.create({
    first_name: 'Ethan',
    last_name: 'Gard',
    email: "test@test.com",
    password: PASSWORD
  })

test_user = 
  User.create({
    first_name: 'Ethan',
    last_name: 'Gard',
    email: "me@me.com",
    password: PASSWORD
  })

15.times do 
  first_name = Faker::Name::first_name
  last_name = Faker::Name::last_name
  User.create({
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}@#{last_name}.com",
    password: PASSWORD
  })

end

users = User.all

rand(23..68).times do 

  created_at = Faker::Date.backward(days: 365 * 5)

  a = Auction.create({
    title: Faker::Hacker.say_something_smart,
    description: Faker::Hacker.say_something_smart,
    date: 'This is the date',
    reserve_price: rand(1...11589),
    created_at: created_at,
    updated_at: created_at,
    user: users.sample
  })

  if a.valid?
      rand(2..6).times do
      Bid.create({
        price: rand(1..1167),
        auction: a, user: users.sample
      })
    end

end

end




puts "You've generated #{Auction.count} Auctions 🔨"
puts "You've generated #{Bid.count} Bids 💰"
puts "You've generated #{User.count} Users 😊"


