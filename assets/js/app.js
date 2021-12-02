$(document).ready(function () {
  $("#nav-close").hide();
  $("#nav-hambuger").show();
  $("#nav-hambuger").click(function () {
    $("#nav-close").show(500);
    $("#nav-hambuger").hide(500);
  });
  $("#nav-close").click(function () {
    $("#nav-close").hide(500);
    $("#nav-hambuger").show(500);
  });
  var color = "yellow";
  console.log("Hello");
  let current = 0;
  $("#page1").show();
  $("#p1").css("background", color);
  $("#page2").hide();
  $("#page3").hide();
  $("#page4").hide();

  $("#p1").click(function () {
    $("#page2").hide(1000);
    $("#page3").hide(1000);
    $("#page4").hide(1000);

    $("#page1").show(1000);

    $("#p2").css("background", "none");
    $("#p3").css("background", "none");
    $("#p4").css("background", "none");
    $("#p1").css("background", color);
    current = 1;
  });

  $("#p2").click(function () {
    $("#page1").hide(1000);
    $("#page3").hide(1000);
    $("#page4").hide(1000);

    // $("#page2").slideUp(1000);
    $("#page2").show(1000);

    $("#p1").css("background", "none");
    $("#p3").css("background", "none");
    $("#p4").css("background", "none");
    $("#p2").css("background", color);
    current = 2;
  });

  $("#p3").click(function () {
    $("#page1").hide(1000);
    $("#page2").hide(1000);
    $("#page4").hide(1000);

    $("#page3").show(1000);

    $("#p1").css("background", "none");
    $("#p2").css("background", "none");
    $("#p4").css("background", "none");
    $("#p3").css("background", color);
    current = 3;
  });

  $("#p4").click(function () {
    $("#page1").hide(1000);
    $("#page2").hide(1000);
    $("#page3").hide(1000);

    $("#page4").show(1000);

    $("#p1").css("background", "none");
    $("#p2").css("background", "none");
    $("#p3").css("background", "none");
    $("#p4").css("background", color);
    current = 4;
  });
});
