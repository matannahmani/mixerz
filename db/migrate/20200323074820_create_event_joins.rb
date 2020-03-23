class CreateEventJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :event_joins do |t|
      t.boolean :status
      t.boolean :pending
      t.references :event, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
