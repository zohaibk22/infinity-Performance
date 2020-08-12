# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_12_064517) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "modifications", force: :cascade do |t|
    t.string "name"
    t.string "brand_name"
    t.boolean "mod_type"
    t.integer "performance_gain"
    t.integer "cost"
    t.bigint "vehicle_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["vehicle_id"], name: "index_modifications_on_vehicle_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "vehicle_type"
    t.string "make"
    t.string "model"
    t.integer "year"
    t.string "engine_type"
    t.string "description"
    t.string "color"
    t.string "image"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_vehicles_on_user_id"
  end

  add_foreign_key "modifications", "vehicles"
  add_foreign_key "vehicles", "users"
end
