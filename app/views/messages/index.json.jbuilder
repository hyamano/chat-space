json.arry @new_messages do |message|
  json.id            message.id
  json.user_name     message.user.name
  json.img           message.img
  json.text          message.content
  json.datetime      message.created_at.to_s(:datetime)
end
