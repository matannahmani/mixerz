class DeleteLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :event, :cords, :float, array: :true
    add_column :user, :cords, :float, arra: :true
  end
end
