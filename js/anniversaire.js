/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    var $enter, $item1, $item2, $item3;
    $enter = $('#enter');
    $item1 = $('.item1');
    $item2 = $('.item2');
    $item3 = $('.item3');
    
    $enter.on('click', function () {
        $item1.show();
    });
    
    $item1.on('click', function () {
        $item2.show();
    });
    
    $item2.on('click', function () {
        $item3.show();
    });
});