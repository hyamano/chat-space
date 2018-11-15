$(function(){
  $('#form-content').on('submit', function(e){
    e.preventDefault();
    console.log(this)
    var formData = new FormData(this);
  })
})
