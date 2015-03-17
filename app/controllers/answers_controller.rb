class AnswersController < ApplicationController
  def index
    @question = Question.find(params[:question_id])

    @answers = @question.answers
  end

  def show
    @question = Question.find(params[:question_id])

    @answer = @question.answers.find(params[:id])
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
