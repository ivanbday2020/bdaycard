/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    var $enter, $item1, $item2, $item3, $item4, $audioApplaud, $audioBirthday;
    $enter = $('#enter');
    $item1 = $('.item1');
    $item2 = $('.item2');
    $item3 = $('.item3');
	$item4 = $('.item4');
    
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
        $item4.show();
    });
    
    $item4.on('click', function () {
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
	
	// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  "What do you call a Pepega that having a birthday today?| Ivan", 
 "Happy birthday,",
  "I Hope you have a wonderful day",
  "and someday you will achieve anything that u want",
  "Thank you for always being so kind to me",
  "You are such a blessing in my life",
  "I hope you like my present even though its not much",
  "Happy birthday my friend",
  "Lets play dota again :-) "

];

// Speed (in milliseconds) of typing.
var speedForward = 100, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 25; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element
  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
    }
    
  // If backspacing is enabled
  } else {
    
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      
      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else { 
      
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }
}
});
