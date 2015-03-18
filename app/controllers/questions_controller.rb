class QuestionsController < ApplicationController

  def index
    @questions = Question.all
    @question = Question.new
    @quote = Zen.new.quote
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

    @question.update(question_params) ? (redirect_to questions_path) : (render 'edit')
  end

  def upvote
    @question = Question.find(params[:id])
    @question.increment!(:vote_total)
    # redirect_to questions_path
    render :json => @question
  end

  def downvote
    @question = Question.find(params[:id])
    @question.decrement!(:vote_total)
    redirect_to questions_path
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy

    redirect_to questions_path
  end


  private
  def question_params
    params.require(:question).permit(:title, :content)
  end

end
