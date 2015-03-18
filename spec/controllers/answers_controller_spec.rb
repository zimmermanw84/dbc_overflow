require 'rails_helper'

RSpec.describe AnswersController, type: :controller do

  describe 'GET #index' do
    before(:each) do
      get :index
    end

    it 'should return status 200' do
      expect(response.status).to eq(200)
    end

  end

end
