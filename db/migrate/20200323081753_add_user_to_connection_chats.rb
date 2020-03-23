class AddUserToConnectionChats < ActiveRecord::Migration[5.2]
  def change
    add_reference :connection_chats, :user, foreign_key: true
  end
end
