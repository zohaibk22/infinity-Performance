class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :vehicle_type
      t.string :make
      t.string :model
      t.integer :year
      t.string :engine_type
      t.string :description
      t.string :color
      t.string :image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
