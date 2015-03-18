class ZenController < ApplicationController

  def index
    zen = Zen.new

    @quote = zen.quote
  end

end
