class CreateConnectionChats < ActiveRecord::Migration[5.2]
  def change
    create_table :connection_chats do |t|
      t.references :connection, foreign_key: true
      t.string :message

      t.timestamps
    end
  end
end
