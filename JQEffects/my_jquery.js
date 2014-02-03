// JQuery Syntax
// $(this).hide() - hide the current element
// $("p").hide() - hides all <p> elements
// $(".test").hide()- hides all elements with class = test
// $("#test").hide() - hides the element with id = test

// Should write code in document ready

$(document).ready(function() {

	// Write code in here

});

// OR

$(function() {
	
	// JQuery code methods go here
	
});



// JQUERY SELECTORS
$("*") // Selects all elements
$(this) // Selects the current HTML Elements
$("p.intro") // Selects all <p> element with class = "intro"
$("p:first") // Select the first <p> element
$("ul li:first") // Select the first <li> element of the first <ul> element
$("ul li:first-child") // Select the first <li> element of the all <ul> elements
$("[href]") // Select all element with an href attribute 
$("a[target='_brank']") // Select all <a> element with a target attribute value equal to _brank
$("a[target!='_brank']") // Select all <a> element with a target attribute value not equal to _brank
$(":button") // Selects all <button> elements and <input> element have type = button
$("tr:even")  // Select all even <tr> elements
$("tr:odd") // Select all odd <tr> elements


// JQUERY EVENT
// ---- MOUSE EVENTS ----
$("p").click();
$("p").dblclick();
$("a[target='_brank']").mouseenter();
$(":button").mouseleave();
// ---- KEYBOARD EVENTS ----
$("tr:even").keypress();
$("tr:odd").keydown();
$("ul li:first").keyup();
// ---- FORM EVENTS ----
$(".form").submit();
$(".form").change();
$("input[name='user']").focus();
$("input[name='user']").blur();
// ---- DOCUMENT / WINDOW EVENTS ----
$("body").load();
$("body").resize();
$("body").scroll();
$("body").unload();





