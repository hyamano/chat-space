json.user_name @message.user.name
json.content @message.content
json.datetime Time.now.to_s(:datetime)
json.image @message.image
