

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