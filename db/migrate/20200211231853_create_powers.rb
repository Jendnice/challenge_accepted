class CreatePowers < ActiveRecord::Migration[6.0]
  def change
    create_table :powers do |t|
      t.string :name
      t.text :description
      t.text :info

      t.timestamps
    end
  end
end
