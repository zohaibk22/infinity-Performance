class CreateModifications < ActiveRecord::Migration[6.0]
  def change
    create_table :modifications do |t|
      t.string :name
      t.string :brand_name
      t.boolean :mod_type
      t.integer :performance_gain
      t.integer :cost
      t.references :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
