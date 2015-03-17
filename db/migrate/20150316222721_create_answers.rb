class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.text :title
      t.text :content
      t.belongs_to :question, index: true

      t.timestamps null: false
    end
  end
end
