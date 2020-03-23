# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_23_074916) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "connection_chats", force: :cascade do |t|
    t.bigint "connection_id"
    t.string "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["connection_id"], name: "index_connection_chats_on_connection_id"
  end

  create_table "connectionchats", force: :cascade do |t|
    t.bigint "connection_id"
    t.string "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["connection_id"], name: "index_connectionchats_on_connection_id"
  end

  create_table "connections", force: :cascade do |t|
    t.boolean "pending"
    t.boolean "status"
    t.bigint "sender_id"
    t.bigint "receiver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_id"], name: "index_connections_on_receiver_id"
    t.index ["sender_id"], name: "index_connections_on_sender_id"
  end

  create_table "event_chats", force: :cascade do |t|
    t.string "message"
    t.bigint "eventmember_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["eventmember_id"], name: "index_event_chats_on_eventmember_id"
  end

  create_table "event_joins", force: :cascade do |t|
    t.boolean "status"
    t.boolean "pending"
    t.bigint "event_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_event_joins_on_event_id"
    t.index ["user_id"], name: "index_event_joins_on_user_id"
  end

  create_table "event_members", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_event_members_on_event_id"
    t.index ["user_id"], name: "index_event_members_on_user_id"
  end

  create_table "eventchats", force: :cascade do |t|
    t.string "message"
    t.bigint "eventmember_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["eventmember_id"], name: "index_eventchats_on_eventmember_id"
  end

  create_table "eventmembers", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_eventmembers_on_event_id"
    t.index ["user_id"], name: "index_eventmembers_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.bigint "location_id"
    t.integer "capacity"
    t.date "date"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_events_on_location_id"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "hobbies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.float "longitude"
    t.float "latitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "settings", force: :cascade do |t|
    t.boolean "active"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "location_id"
    t.date "birthday"
    t.string "home"
    t.bigint "hobby_id"
    t.integer "rating"
    t.date "lastonline"
    t.string "bio"
    t.boolean "gender"
    t.string "work"
    t.string "education"
    t.bigint "setting_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["hobby_id"], name: "index_users_on_hobby_id"
    t.index ["location_id"], name: "index_users_on_location_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["setting_id"], name: "index_users_on_setting_id"
  end

  add_foreign_key "connection_chats", "connections"
  add_foreign_key "connectionchats", "connections"
  add_foreign_key "event_chats", "eventmembers"
  add_foreign_key "event_joins", "events"
  add_foreign_key "event_joins", "users"
  add_foreign_key "event_members", "events"
  add_foreign_key "event_members", "users"
  add_foreign_key "eventchats", "eventmembers"
  add_foreign_key "eventmembers", "events"
  add_foreign_key "eventmembers", "users"
  add_foreign_key "events", "locations"
  add_foreign_key "events", "users"
  add_foreign_key "users", "hobbies"
  add_foreign_key "users", "locations"
  add_foreign_key "users", "settings"
end
