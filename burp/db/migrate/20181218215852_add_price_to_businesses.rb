class AddPriceToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :price, :string
  end
end
