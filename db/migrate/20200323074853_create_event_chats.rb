class CreateEventChats < ActiveRecord::Migration[5.2]
  def change
    create_table :event_chats do |t|
      t.string :message
      t.references :event_member, foreign_key: true

      t.timestamps
    end
  end
end
