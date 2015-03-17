require 'rails_helper'

RSpec.describe Answer, type: :model do
  context 'Validations' do
    it { should validate_presence_of :title }
    it { should validate_presence_of :content }
  end
end
