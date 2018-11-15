$(function() {

  var search_list = $("#user-search-result")

  $("#user-search-field").on("keyup", function() {

    var input = $(this).val();

    console.log(input);

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json',
    })


     .done(function(users){
      console.log('通信成功');

      console.log("返却値を確認：", users);
      $("#user-search-result").empty();


      if (users.length !== 0) {
        users.forEach(function(user){
        })
      } else {

      }

    })

    .fail(function(){
      alert('通信失敗');
    })
  });
});
