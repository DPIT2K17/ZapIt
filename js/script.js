$(document).ready(function(){
  $(".button-collapse").sideNav();
  var moyenne = 0;
  var nombre;
  var i;
  if (localStorage.getItem('rating') !== null) {
    var moyenne = 0;
    var nombre;
    var i;
    var vote = JSON.parse(localStorage.getItem("rating"));
    nombre = vote.nbVote;
    $.each(vote, function(index, value){
     moyenne += value.note;
     i = index + 1;
    });
    moyenne = moyenne / i;
    rating(moyenne,i);
  }else {
    $.getJSON("data.json", function(){
     console.log('done');
   }).done(function(data){
     nombre = data.nbVote;
     localStorage.setItem('rating', JSON.stringify(data.rating));
     $.each(data.rating, function(index, value){
      moyenne += value.note;
      i = index + 1;
     });
     moyenne = moyenne / i;
     rating(moyenne,i);
     console.log("la moyenne est de "+moyenne);

   }).fail(function(error){
     console.log(error);
   });
  }
 $('#star-1').click(function(){
   var moyenne = 0;
   var nombre;
   var i;
   var vote = JSON.parse(localStorage.getItem("rating"));
   nombre = vote.nbVote + 1;
   vote.push({"note": 1});
   $.each(vote, function(index, value){
    moyenne += value.note;
    i = index + 1;
   });
   moyenne = moyenne / i;
   console.log(moyenne);
   rating(moyenne,i);
   localStorage.removeItem('rating');
   localStorage.setItem('rating',JSON.stringify(vote));
 });
 $('#star-2').click(function(){
   var moyenne = 0;
   var nombre;
   var i;
   var vote = JSON.parse(localStorage.getItem("rating"));
   nombre = vote.nbVote + 1;
   vote.push({"note": 2});
   $.each(vote, function(index, value){
    moyenne += value.note;
    i = index + 1;
   });
   moyenne = moyenne / i;
   localStorage.removeItem('rating');
   localStorage.setItem('rating',JSON.stringify(vote));
   rating(moyenne,i);
 });
 $('#star-3').click(function(){
   var moyenne = 0;
   var nombre;
   var i;
   var vote = JSON.parse(localStorage.getItem("rating"));
   nombre = vote.nbVote + 1;
   vote.push({"note": 3});
     $.each(vote, function(index, value){
      moyenne += value.note;
      i = index + 1;
    });
     moyenne = moyenne / i;
        console.log(moyenne);
     localStorage.removeItem('rating');
     localStorage.setItem('rating',JSON.stringify(vote));
     rating(moyenne,i);
 });
 $('#star-4').click(function(){
   var moyenne = 0;
   var nombre;
   var i;
   var vote = JSON.parse(localStorage.getItem("rating"));
   nombre = vote.nbVote + 1;
   vote.push({"note": 4});
   $.each(vote, function(index, value){
    moyenne += value.note;
    i = index + 1;
   });
   moyenne = moyenne / i;
      console.log(moyenne);
   localStorage.removeItem('rating');
   localStorage.setItem('rating',JSON.stringify(vote));
   rating(moyenne,i);
 });
 $('#star-5').click(function(){
   var moyenne = 0;
   var nombre;
   var i;
   var vote = JSON.parse(localStorage.getItem("rating"));
   nombre = vote.nbVote + 1;
   vote.push({"note": 5});
     $.each(vote, function(index, value){
      moyenne += value.note;
      i = index + 1;
     });
     moyenne = moyenne / i;
        console.log(moyenne);
     localStorage.removeItem('rating');
     localStorage.setItem('rating',JSON.stringify(vote));
     rating(moyenne,i);
 });
 function rating(_moyenne,nombre){
   if (_moyenne <= 1) {
     $('#star-1').prop('checked', true);
     $('#star-2').prop('checked', false);
     $('#star-3').prop('checked', false);
     $('#star-4').prop('checked', false);
     $('#star-5').prop('checked', false);
   }else
   if (_moyenne <= 2) {
     $('#star-2').prop('checked', true);
     $('#star-3').prop('checked', false);
     $('#star-4').prop('checked', false);
     $('#star-5').prop('checked', false);
   }else
   if (_moyenne <= 3) {
     $('#star-3').prop('checked', true);
     $('#star-4').prop('checked', false);
     $('#star-5').prop('checked', false);
   }else
   if (_moyenne <= 4) {
     $('#star-4').prop('checked', true);
     $('#star-5').prop('checked', false);
   }else
   if (_moyenne <= 5) {
     $('#star-5').prop('checked', true);
   }
   $('#nombre').html(nombre+" avis");
 }
 if (localStorage.getItem('suggestions') !== null) {
   var suggestions = JSON.parse(localStorage.getItem("suggestions"));
   $.each(suggestions, function(index, value){
     $('#suggestions').append("<tr><td>"+value.prenom+" "+value.nom+
     "</td><td>"+value.suggestion+"</td><td>"+value.date+"</td></tr>");
   });
 }else {
   $.getJSON("suggestion.json", function(){
    console.log('done');
   }).done(function(data){
     console.log(data);
    localStorage.setItem('suggestions', JSON.stringify(data.suggestions));
    $.each(data.suggestions, function(index, value){
      $('#suggestions').append("<tr><td>"+value.prenom+" "+value.nom+
      "</td><td>"+value.suggestion+"</td><td>"+value.date+"</td></tr>");
    });

   }).fail(function(error){
    console.log(error);
   });
 }
$('#submit').click(function(event){
  event.preventDefault();
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  switch (month) {
    case 1: month = "Janvier";
      break;
    case 2: month = "Fevrier";
      break;
    case 3: month = "Mars";
      break;
    case 4: month = "Avril";
      break;
    case 5: month = "Mai";
      break;
    case 6: month = "Juin";
      break;
    case 7: month = "Juillet";
      break;
    case 8: month = "Aout";
      break;
    case 9: month = "Septembre";
      break;
    case 10: month = "Octobre";
      break;
    case 11: month = "Novembre";
      break;
    case 12: month = "Decembre";
      break;
  }
  var currentDate =day+" "+month+" "+year;
  var suggestions = JSON.parse(localStorage.getItem('suggestions'));
  suggestions.push({"nom":$('#last_name').val(),"prenom":$('#first_name').val(),"suggestion":$('#suggestion').val(),"date":currentDate});
  localStorage.removeItem('suggestions');
  localStorage.setItem('suggestions',JSON.stringify(suggestions));
  $('#suggestions').append("<tr><td>"+$('#first_name').val()+" "+$('#last_name').val()+
  "</td><td>"+$('#suggestion').val()+"</td><td>"+currentDate+"</td></tr>");
});

});
