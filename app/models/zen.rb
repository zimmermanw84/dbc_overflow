require 'httparty'

class Zen
  def initialize
    @request = HTTParty.get("https://api.github.com/zen", zen_header)
  end

  def zen_header
    headers: { 'User-Agent' => "https://#{ENV['URL']}"}
  end

  def quote
    @request.body
  end
end
