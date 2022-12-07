# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Bid.destroy_all
Auction.destroy_all

rand(23..68).times do 
  a = Auction.create({
    title: Faker::Hacker.say_something_smart,
    description: Faker::Hacker.say_something_smart,
    date: 'This is the date',
    reserve_price: rand(1...11589)
  })

  if a.valid?
      rand(2..18).times do
      Bid.create({
        price: rand(1..1167),
        auction: a
      })
    end

end

end




puts "You've generated #{Auction.count} Auctions 🔨"
puts "You've generated #{Bid.count} Bids 💰"


