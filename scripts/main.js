$(document).ready(function(){

   $("#big-cities").hide();
   $("#small-cities").hide();

   var d = new Date();

   var month = d.getMonth()+1;
   var day = d.getDate();

   var output = d.getFullYear() + '/' + month + '/' + day;

   $("#datepicker").text("DATE : " + output);

   $("#earth").hover(function ()
   {
     $("#big-cities, #small-cities").delay(500)
                                  .fadeIn(750);
     $("#europe, #asia, #africa").delay(500)
              .addClass("night");
    $("#water").delay(500)
              .addClass("nightwater");
   },
   function(){
     $("#big-cities, #small-cities").fadeOut(750);
     $("#europe, #asia, #africa").delay(500)
                .removeClass("night");
    $("#water").delay(500)
              .removeClass("nightwater");
   });
 });
