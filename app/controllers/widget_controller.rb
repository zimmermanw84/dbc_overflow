class WidgetController < ApplicationController

  def index
    @widget = ''
  end

  def ajax
    @widget = { title: params[:title], content: params[:content] }
    render :json => @widget
  end
end
