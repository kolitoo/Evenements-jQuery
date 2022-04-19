$(document).ready(function() {
    console.info('Document chargé 1');
})

$(function() {
    console.info('Document chargé 2');
})

jQuery(function() {
    console.info('Document chargé 3');
})

jQuery(document).ready(function($) {
    console.info('Document chargé 4');
})

$(() => {
    console.info('Document chargé 5');
})

$('.zone1').mouseover(function() {
    $(this).css('background', 'IndianRed');
    $('#info').html('Je suis sur la zone 1');
})

$('.zone2').mouseout(function() {
    $(this).css('background', 'Grey');
    $('#info').html('Je suis sorti la zone 2');
})

$('.zone3').mouseenter(function () { 
    $(this).css('background', 'IndianRed');
    $('#info').html('J\'entre dans la zone3');
});
$('.zone3').mouseleave(function () { 
    $(this).css('background', 'Khaki');
    $('#info').html('Je sors de la zone3');
})

$('.zone4').on('click', function () { 
    $(this).css('background', 'purple');
    $('#info').html('J\'ai cliqué sur la zone4');
})


$('.zone5').dblclick(function () { 
    $(this).css('background', 'burlywood');
    $('#info').html('J\'ai double cliqué sur la zone5');
})


$('.zone6').contextmenu(function () { 
    $(this).css('background', 'aqua');
    $('#info').html('J\'ai cliqué droit sur la zone6');
})


$('.zone7').blur(function () { 
    $(this).css('background', 'pink');
    $('#info').html('J\'ai cliqué ailleurs apres avoir cliqué sur la zone7');
})


$('.zone8').change(function () { 
    $(this).css('background', 'Orange');
    $('#info').html('J\'ai choisit un pays dans la zone8');
})


$('.zone9').keydown(function () { 
    $(this).css('background', 'grey');
    $('#info').html('J\'ai appuyé sur une touche dans la zone9');
})


$('.zone9').keyup(function () { 
    $(this).css('background', 'IndianRed');
    $('#info').html('J\'ai relaché une touche de mon clavier dans la zone9');
})


$(document).scroll(function () { 
    $('info').css('background', 'lightgreen');
    $('#info').text('Je scrolle');
})
