class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.string :rooms
      t.integer :price
      t.string :location
      t.string :image_url
      t.integer :contact

      t.timestamps
    end
  end
end
