class RemoveLocation < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :location_id
    remove_column :events, :location_id
  end
end
