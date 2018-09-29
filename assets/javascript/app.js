

// show/hide table/card on mobile
$('#weekInfoBtn').click(function() {
    $('.back').toggle("slow");
    $('.front').toggle("slow");
    $('#weekInfoBtn').toggle("slow");
    $('#weekInfoBtn2').toggle("slow");
})

$('#weekInfoBtn2').click(function() {
    $('.back').toggle("slow");
    $('.front').toggle("slow");
    $('#weekInfoBtn2').toggle("slow");
    $('#weekInfoBtn').toggle("slow");
});