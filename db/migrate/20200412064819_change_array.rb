class ChangeArray < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :cords, :float
    remove_column :users, :cords, :float
    add_column :events, :latitude, :float
    add_column :users, :latitude, :float
    add_column :events, :longitude, :float
    add_column :users, :longitude, :float
  end
end
