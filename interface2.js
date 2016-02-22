var etat = {
  "inbox": [
    {
      "from": "AF22111212232211122",
      "date": "2015 12 28 20:15:42",
      "msg": "RDV ala cour pour" },
    {
      "from": "AF22111212232211122",
      "date": "2016 01 03 10:15:31",
      "msg": "hi go to the shop for more fun " } ],
  "outbox": [
    {
      "to": "90221F212A4200001AA",
      "date": "2016 01 12 20:15:42",
      "msg": "What are u doin ?." } ],
  "yp": {
    "AF22111212232211122": {"name": "Jean Fanchon"},
    "90221F212A4200001AA": {"name": "Bob"} }
};

$("#b1").click( function (){
etat.inbox.forEach( function(msg){
  $("#id").append(
    $("<h1>").text(msg.msg));
    $("#id").append(
      $("<h1>").text(etat.yp[msg.from].name));
      $("#id").append(
        $("<h1>").text(msg.date));
});
});
$("#b2").click( function (){
etat.outbox.forEach( function(msg){
  $("#id").append(
    $("<h1>").text(msg.date));

    $("#id").append(
      $("<h1>").text(etat.yp[msg.to].name));
      $("#id").append(
        $("<h1>").text(msg.msg));

});
});

$("#b4").click(function(){
  etat.outbox.push({to:$("#@").text(),msg:$("#msg").text(),date:new Date()});
var new ("#b2")=("#b4");
console.log(etat.outbox);
});
