class RenameTypeToEType < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :type, :etype
  end
end
