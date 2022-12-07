class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.string :date
      t.integer :reserve_price

      t.timestamps
    end
    add_index :auctions, :title
  end
end
