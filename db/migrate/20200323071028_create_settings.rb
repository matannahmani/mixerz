class CreateSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :settings do |t|
      t.boolean :active
      t.string :name

      t.timestamps
    end
  end
end
