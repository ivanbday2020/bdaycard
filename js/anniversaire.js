/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    var $enter, $item1, $item2, $item3, $audioApplaud, $audioBirthday;
    $enter = $('#enter');
    $item1 = $('.item1');
    $item2 = $('.item2');
    $item3 = $('.item3');
    
    $audioApplaud = document.createElement('audio');
    $audioApplaud.setAttribute('src', 'audio/applaudissements.mp3');
    
    $audioBirthday = document.createElement('audio');
    $audioBirthday.setAttribute('src', 'audio/Happy-Birthday.mp3');
    
    $enter.on('click', function () {
        $item1.show();
    });
    
    $item1.on('click', function () {
        $item2.show();
    });
    
    $item2.on('click', function () {
        $item3.show();
    });
    
    $item3.on('click', function () {
        $("h1:contains('Today is a special day !!!')").html("Happy Birthday to you !");
        $enter.hide();
        $('.item').hide();
        $('body').css('background-color', '#229AAD');
        $('.blow').show();
        $('.drawing').show();
        $('#wind').show();
        $audioApplaud.play();
    });
    
    $('#wind').on('click', function () {
        $('.flame').hide();
        $audioBirthday.play();
        $(".blow:contains('Blow your candle !')").html("Light your candle !");
        $(this).hide();
        $('#fire').show();
    });
	 
    $('#fire').on('click', function () {
        $audioBirthday.pause();
        $('.flame').show();
        $audioBirthday.pause();
        $(".blow:contains('Light your candle !')").html("Blow your candle !");
        $(this).hide();
        $('#wind').show();
    });
});