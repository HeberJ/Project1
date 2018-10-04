

// show/hide table/card on mobile
$('#weekInfoBtn').click(function() {
    $('.back').slideToggle("slow", "linear");
    $('.front').slideToggle("slow", "linear");
    $('#weekInfoBtn').toggle("slow", "linear");
    $('#weekInfoBtn2').toggle("slow", "linear");
})

$('#weekInfoBtn2').click(function() {
    $('.back').slideToggle("slow", "linear");
    $('.front').slideToggle("slow", "linear");
    $('#weekInfoBtn2').toggle("slow", "linear");
    $('#weekInfoBtn').toggle("slow", "linear");
});

// Hide the Videos when page opens//
$(document).ready(function(){
      $(".iframe").hide();
  });
  
// Show Videos when clicked//
$("#videos").click(function(){
  $(".iframe").show();
});

//Return to home//
$("#return").click(function(){
  $(".iframe").hide();
});



// YouTube Script with AJAX call//

    var search = "Developing_Dad"
    var queryURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=PLREt7zmQ0ia9h4ei96HMYofMIKAjjJeqP&key=AIzaSyCyVZ7FuPdYiUNsKb2pwPSJpaezNGp0yA0"; 
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(response.items[0].contentDetails.videoId);
      console.log(response.items[1].contentDetails.videoId);
      console.log(response.items[2].contentDetails.videoId);

      var videoId = "I6BdAtlV79g"
      var x = "https://www.youtube.com/embed/" + videoId + "?controls=0"
      
    });

    $('<iframe src="https://www.youtube.com/embed/I6BdAtlV79g?controls=0" frameborder="0" scrolling="no" id="myFrame"></iframe>')
    .appendTo('.wrapper');

    $('<iframe src="https://www.youtube.com/embed/WtDknjng8TA?controls=0" frameborder="0" scrolling="no" id="myFrame"></iframe>')
    .appendTo('.wrapper');

    $('<iframe src="https://www.youtube.com/embed/n65HW1iJUuY?controls=0" frameborder="0" scrolling="no" id="myFrame"></iframe>')
    .appendTo('.wrapper');




      