$(function() {

  var append_list = $("#chat-group-users")
  var search_list = $("#user-search-result")
  function appendUser(user) {
    var html = '<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="
                  ${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>'
    search_list.append(html);
  }

  function appendNoUser(Nousertext) {
    var html = '<div class="chat-group-user clearfix">
  //                 <p class="chat-group-user__name">${ Nousertext }</p>'
    search_list.append(html);
  }

   function appendMember(add_user){
    var html = '<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value="${ add_user.userId}">
                  <p class='chat-group-user__name'>${ add_user.userName}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>'
    append_list.append(html);
   }
   $(document).on("click",".chat-group-user__btn--add",function(){
    var user = $(this).data();
    appendMember(user);
    $(this).parent().remove();
  });
   $(document).on("click",".chat-group-user__btn--remove ",function(){
    $(this).parent().remove();
  });


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

