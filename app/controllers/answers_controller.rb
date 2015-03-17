class AnswersController < ApplicationController

  def index
    @question = Question.find(params[:question_id])

    @answers = @question.answers

    @answer = @question.answers.new
  end

  def show
    @question = Question.find(params[:question_id])

    @answer = @question.answers.find(params[:id])
  end

  def new
    @question = Question.find(params[:question_id])

    @answer = @question.answers.new
  end

  def edit
    @question = Question.find(params[:question_id])

    @answer = @question.answers.find(params[:id])
  end

  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.new(answer_params)

    @answer.save ? (redirect_to question_answers_path) : (render 'new')
  end

  def update
    @question = Question.find(params[:question_id])
    @answer = @question.answers.find(params[:id])

    @answer.save ? (redirect_to question_answers_path) : (render 'new')
  end

  def delete

  end

  private
  def answer_params
    params.require(:answer).permit(:title, :content)
  end

end