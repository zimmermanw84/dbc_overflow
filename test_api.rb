require 'httparty'

walt = HTTParty.get("https://api.github.com/zen", headers: { 'User-Agent' => 'https://github.com/zimmermanw84'})

p walt.body

# "Authorization" => "Token token=db16a5bcbb40d5a7183a529d40045e42eb4a3d8f"