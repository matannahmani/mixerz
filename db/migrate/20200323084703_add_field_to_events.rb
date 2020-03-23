class AddFieldToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :category, foreign_key: true
    add_column :events, :type, :boolean
  end
end
