class CreateApartments < ActiveRecord::Migration[7.0]
  def change
    create_table :apartments do |t|
      t.string :rooms
      t.integer :price
      t.string :location
      t.string :image_url
      t.integer :contact
      t.belongs_to :landlord, foreign_key: true
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
