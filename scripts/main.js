$(document).ready(function(){

   // jQuery methods go here...
   var d = new Date();

   var month = d.getMonth()+1;
   var day = d.getDate();

   var output = d.getFullYear() + '/' + month + '/' + day;

   $("#datepicker").text("DATE : " + output);

 });
