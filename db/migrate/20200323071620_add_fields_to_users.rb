class AddFieldsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :location, foreign_key: true
    add_column :users, :birthday, :date
    add_column :users, :home, :string
    add_reference :users, :hobby, foreign_key: true
    add_column :users, :rating, :integer
    add_column :users, :lastonline, :date
    add_column :users, :bio, :string
    add_column :users, :gender, :boolean
    add_column :users, :work, :string
    add_column :users, :education, :string
    add_reference :users, :setting, foreign_key: true
  end
end
