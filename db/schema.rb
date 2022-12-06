# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_06_173442) do
  create_table "apartments", force: :cascade do |t|
    t.string "rooms"
    t.integer "price"
    t.string "location"
    t.string "image_url"
    t.integer "contact"
    t.integer "landlord_id"
    t.integer "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_apartments_on_client_id"
    t.index ["landlord_id"], name: "index_apartments_on_landlord_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "rooms"
    t.string "location"
    t.integer "price"
    t.integer "contact"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "landlords", force: :cascade do |t|
    t.string "rooms"
    t.string "location"
    t.integer "price"
    t.integer "contact"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "apartments", "clients"
  add_foreign_key "apartments", "landlords"
end
