$(function() {

  var search_list = $("#user-search-result")
  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="
                  ${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    search_list.append(html);
  }

  function appendNoUser(Nousertext) {
    var html = `<div class="chat-group-user clearfix">
  //                 <p class="chat-group-user__name">${ Nousertext }</p>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $(this).val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json',
    })

    .done(function(users){
      $("#user-search-result").empty();
      if(users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        })
      }else{
        appendNoUser("該当ユーザなし");
      }
    })
    .fail(function(){
      alert('通信失敗');
    })
  });
});

