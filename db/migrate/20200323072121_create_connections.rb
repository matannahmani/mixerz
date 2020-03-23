class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.boolean :pending
      t.boolean :status
      t.references :sender
      t.references :receiver
      t.timestamps
    end
  end
end
