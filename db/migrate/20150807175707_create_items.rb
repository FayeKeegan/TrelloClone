class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.boolean :done, null: false
      t.integer :card_id, null: false
      t.timestamps null: false
    end
  end
end
