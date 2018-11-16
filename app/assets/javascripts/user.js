$(function() {

  var search_list = $("#user-search-result")
  function appendUser(user) {
    // console.log("appendUser");
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="
                  ${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    search_list.append(html);
  }

  function appendNoUser(Nousertext) {
    // console.log("NoappendUser");
    var html = `<div class="chat-group-user clearfix">
  //                 <p class="chat-group-user__name">${ Nousertext }</p>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $(this).val();
    // console.log(input);
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json',
    })

    .done(function(users){
      // console.log('ajax通信：成功');
      // console.log("返却値を確認：", users);
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
           appendUser(user);
        })
      } else {
        appendNoUser("該当ユーザなし");
      }
    })
    .fail(function(){
       alert('通信失敗');
     })
   });
 });

