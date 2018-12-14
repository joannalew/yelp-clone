class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :business_name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false

      t.float :latitude
      t.float :longitude
      t.string :phone
      t.string :website

      t.timestamps
    end

    add_index :businesses, :business_name
  end
end
