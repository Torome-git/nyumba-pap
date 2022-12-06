class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :rooms
      t.string :location
      t.integer :price
      t.integer :contact
      t.string :img_url
      t.string :Apartments

      t.timestamps
    end
  end
end
