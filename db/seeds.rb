# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Started seeding'
User.create(email: 'm@m.com', password: 123456, fullname: 'Matan Nahmani')
User.create(email: 'm2@m.com', password: 123456, fullname: 'Matan Nahmani2', bio:"love hookers", gender: true, home: 'Tel Aviv', birthday: Date.today)
Event.create(name: 'Gangnam Party',description: 'Hookers and alcohol',capacity: 80,date: Date.today,user_id: User.first.id,etype: true,categories: ['Hardstyle','EDM'],latitude: 36,longitude: 136)
Connection.create(sender_id: 1,receiver_id: 2,pending: false,status: true)
puts 'Finished seeding'
