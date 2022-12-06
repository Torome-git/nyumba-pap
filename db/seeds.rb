puts "Deleting old data"
Client.destroy_all
Apartment.destroy_all
Landlord.destroy_all

puts "🌱 Seeding data..."

puts "seeding client"

Client.create(rooms:"two-bedroom", price:30000, location: "Ngara", img_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425)
Client.create(rooms:"two-bedroom", price:20000, location: "Ngara", img_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425)
Client.create(rooms:"two-bedroom", price:15000, location: "Ngara", img_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425)
Client.create(rooms:"two-bedroom", price:10000, location: "Ngara", img_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425)

puts "done seeding client"
puts "seeding apartment"

Apartment.create(rooms:"two-bedroom", price:60000, location: "Ngara", image_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425, client_id: 1, landlord_id: 1)
Apartment.create(rooms:"two-bedroom", price:32000, location: "Ngara", image_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425, client_id: 1, landlord_id: 1)
Apartment.create(rooms:"two-bedroom", price:45000, location: "Ngara", image_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425, client_id: 1, landlord_id: 1)
Apartment.create(rooms:"two-bedroom", price:80000, location: "Ngara", image_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425, client_id: 1, landlord_id: 1)
puts "done seeding apartment"

puts "seeding landlord"
Landlord.create(rooms:"two-bedroom", price:35000, location: "Ngara", img_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425)
Landlord.create(rooms:"two-bedroom", price:90000, location: "Ngara", img_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425)
Landlord.create(rooms:"two-bedroom", price:100000, location: "Ngara", img_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425)
Landlord.create(rooms:"two-bedroom", price:65000, location: "Ngara", img_url: "https://i.roamcdn.net/prop/brk/listing-thumb-376w/cb435f69849e64f83aee6349de932791/-/prod-property-core-backend-media-brk/4440829/023a05eb-34d0-417c-9742-96566adecde7.jpeg", contact: 0765342425)
puts "🌱 Done seeding!"
