class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.integer :capacity
      t.date :date
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
