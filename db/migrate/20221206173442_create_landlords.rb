class CreateLandlords < ActiveRecord::Migration[7.0]
  def change
    create_table :landlords do |t|
      t.string :rooms
      t.string :location
      t.integer :price
      t.integer :contact
      t.string :img_url

      t.timestamps
    end
  end
end
