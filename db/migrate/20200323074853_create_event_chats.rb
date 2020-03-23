class CreateEventChats < ActiveRecord::Migration[5.2]
  def change
    create_table :event_chats do |t|
      t.string :message
      t.references :eventmember, foreign_key: true

      t.timestamps
    end
  end
end
