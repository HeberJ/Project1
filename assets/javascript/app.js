

// show/hide table/card on mobile
$('#weekInfoBtn').click(function() {
    $('.back').toggle(2000);
    $('.front').toggle(2000);
    $('#weekInfoBtn').toggle(2000);
    $('#weekInfoBtn2').toggle(2000);
})

$('#weekInfoBtn2').click(function() {
    $('.back').toggle(2000);
    $('.front').toggle(2000);
    $('#weekInfoBtn2').toggle(2000);
    $('#weekInfoBtn').toggle(2000);
});