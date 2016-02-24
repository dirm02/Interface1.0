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
  "yp": {  "AF22111212232211122": {"name": "Jean Fanchon"},"90221F212A4200001AA": {"name": "Bob"} }
};



$("#inbox").click( function (){
etat.inbox.forEach( function(msg,x){
  if (x<2 ) {
  $("#showinbox").append(
    $("<h5>").text(msg.msg));
    $("#showinbox").append(
      $("<h5>").text(etat.yp[msg.from].name));
      $("#showinbox").append(
        $("<h5>").text(msg.date));

}
});
});
$("#outbox").click( function (){
etat.outbox.forEach( function(msg){
  $("#showoutbox").append(
    $("<h3>").text(msg.date));

    $("#showoutbox").append(
      $("<h3>").text(etat.yp[msg.to].name));
      $("#showoutbox").append(
        $("<h3>").text(msg.msg));

});
});
$("#contact").click( function (){
  etat.outbox.forEach( function(msg){
  $("#showcontact").append(
    $("<h3>").text(etat.yp[msg.to].name));
    etat.inbox.forEach( function(msg){
        $("#showcontact").append(
      $("<h5>").text(etat.yp[msg.from].name));
  });
});
});
$("#b4").click(function(){
  etat.outbox.append({"to":$("#@").text(),"msg":$("#msg").text(),"date":new Date()});
});
