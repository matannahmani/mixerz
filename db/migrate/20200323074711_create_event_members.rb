class CreateEventMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :event_members do |t|
      t.references :user, foreign_key: true
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
