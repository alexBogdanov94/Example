$(document).ready(function() {
$('#content').hide();

$('#open').click( function() {
$('#content').animate({
width: 'toggle'
},1000);


$(this).text($(this).text() == 'open me' ? 'close me' : 'open me');

	

});//end click
   
$("#openMob").click(function(){
        $("#content").slideToggle("slow");
    $(this).text($(this).text() == 'open me' ? 'close me' : 'open me');
  
    });//end openMob
    

});//end ready function


