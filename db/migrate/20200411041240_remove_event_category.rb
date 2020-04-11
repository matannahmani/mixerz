class RemoveEventCategory < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :category_id
    add_column :events, :categories, :string, array: true
  end
end
