$(document).ready(function(){
  $(".button-collapse").sideNav();
  var moyenne = 0;
  var nombre;
  var i;
  $.getJSON("data.json", function(){
   console.log('done');
 }).done(function(data){
   nombre = data.nbVote;
   localStorage.setItem('users', JSON.stringify(data.rating));
   $.each(data.rating, function(index, value){
    moyenne += value.note;
    i = index + 1;
   });
   moyenne = moyenne / i;
   console.log("la moyenne est de "+moyenne);
   if (moyenne <= 1) {
     $('#star-1').prop('checked', true);
   }else
   if (moyenne <= 2) {
     $('#star-2').prop('checked', true);
   }else
   if (moyenne <= 3) {
     $('#star-3').prop('checked', true);
   }else
   if (moyenne <= 4) {
     $('#star-4').prop('checked', true);
   }else
   if (moyenne <= 5) {
     $('#star-5').prop('checked', true);
   }
   $('#nombre').html(nombre+" avis");
 }).fail(function(error){
   console.log(error);
 });
 $('form').click(function(){
   alert('votre avis ne sera jamais pris en compte ! Muahahahahahahaha');
 });
});
