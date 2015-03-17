class QuestionsController < ApplicationController

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def new
    @question = Question.new
  end

  def edit
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)

    @question.save ? (redirect_to @question) : (render 'new')
  end

  def update
    @question = Question.find(params[:id])

    @question.update(question_params) ? (redirect_to @question) : (render 'edit')

  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy

    redirect_to question_path
  end


  private
  def question_params
    params.require(:question).permit(:title, :content)
  end

end
