json.array! @new_messages do |message|
  json.id            message.id
  json.user_name     message.user.name
  json.image         message.image
  json.text          message.content
  json.datetime      message.created_at.to_s(:datetime)
end
