class Zen
  def initialize
    @request = HTTParty.get("https://api.github.com/zen?access_token=#{ENV['TOKEN']}", headers: { 'User-Agent' => "#{ENV['URL']}"})
  end

  def quote
    @request.body
  end
end
