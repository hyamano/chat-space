$(function(){
  function buildHTML(message){

  var message_html = (message.text) ? `${message.text}` : "";
  var image_html = (message.image.url) ? `<img class="lower-message__image" src=${ message.image.url }>` : "";
  var html = `<div class ="message">
                <div class ="upper-message">
                  <div class ="upper-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class = "upper-message__date">
                    ${message.datetime}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message_content">
                    ${message_html}
                  </p>
                  ${image_html}
                </div>
              </div>`

    return html;
  }

  $('#form-content').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__submit').prop('disabled',false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
      $('#form-content')[0].reset();
     })

    .fail(function(){
      alert('通信失敗');
      $('.form__submit').prop('disabled',false);

          var interval = setInterval(function(){

    var current_url = window.location.href;
    console.log(current_url);

    var new_message = $('.message').last().attr('message-id');
    console.log(new_message);

  if(current_url.match(/\/groups\/\d+\/messages/)){
    console.log("ajax通信を行う");

      $.ajax({
        url: current_url,
        type: "GET",
        data: {id: new_message},
        dataType: 'json',
      })
    .done(function(otherMessages){
      console.log("結果",otherMessages);
    })
  },5000);
 });
