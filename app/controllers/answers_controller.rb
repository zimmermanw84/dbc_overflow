class AnswersController < ApplicationController
  def index
    @question = Question.find(params[:question_id])

    @answers = Answer.all
  end

  def show

  end

  def new

  end

  def edit

  end

  def create

  end

  def update

  end

  def delete

  end
end
