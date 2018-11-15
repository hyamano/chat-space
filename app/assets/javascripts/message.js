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
    e.preventDefault();　// 送信を止める
    var formData = new FormData(this);
    console.log(this);
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
      var html = buildHTML(data); //メッセージをappendするHTMLを生成
      $('.messages').append(html);
      $('.form__submit').prop('disabled',false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
      $('#form-content')[0].reset();
      // alert("通信成功");
     })
    .fail(function(){
      alert('通信失敗'); // 通信が失敗したときの処理
      $('.form__submit').prop('disabled',false);
    })
  });
});
