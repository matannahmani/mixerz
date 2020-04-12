class Removelocation < ActiveRecord::Migration[5.2]
  def change
    drop_table :locations, force: :cascade
    add_column :events, :cords, :float, array: :true
    add_column :users, :cords, :float, arra: :true
  end
end
