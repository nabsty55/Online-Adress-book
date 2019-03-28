$(document).ready(function(){
  $('#form-button').click(function(){

    $(".container").hide();
    $(".container2").show();
    $(".info").on('submit', function(event){
      event.preventDefault();
    var firstName = $("#fname").val();
     var lastName = $("input#lname").val();
     var contact1 ={firstname:firstName, lastname:lastName};
     console.log(contact1);
     $("#names ").append("<li>"+contact1.firstname+" "+contact1.lastname+"</li>");
       $(".container").show();
       $(".container2").fadeOut();
       //return false;
     })
  })
})
