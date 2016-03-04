function changesize() {
  var len = document.getElementById("temp-input").value.length;
  document.getElementById("temp-input").size = len;
  if (len < 6) {
    document.getElementById("temp-input").size = 6;
  }
}

// moves cursor to end of input textbox
$(document).ready(function() {
  var input = $("#temp-input");
  var len = input.val().length;

  input[0].focus();
  input[0].setSelectionRange(len,len);

  $("button").unbind();
  $("#celcius").one('click', FtoC);
  $("#kelvin").one('click', FtoK);
  $("#fahrenheit").addClass("selected");
});


// converts to celcius when clicked
function FtoC() {
  var f = 0;
  var c = 0;
  var crnd = 0;
  var f = $("#temp-input").val();
  var c = ((5/9) * (parseFloat(f) - 32));
  var crnd = Math.round(c * 100) / 100;
  $("#temp-input").val(crnd);
  $("button").unbind();
  $("#fahrenheit").one('click', CtoF);
  $("#kelvin").one('click', CtoK);
  $("#fahrenheit, #celcius, #kelvin").removeClass("selected");
  $("#celcius").addClass("selected");
}

// converts to fahrenheit when clicked
function CtoF() {
  var c = 0;
  var f = 0
  var frnd = 0;
  var c = $("#temp-input").val();
  var f = ((parseFloat(c) * (9/5)) + 32);
  var frnd = Math.round(f * 100) / 100;
  $("#temp-input").val(frnd);
  $("button").unbind();
  $("#celcius").one('click', FtoC);
  $("#kelvin").one('click', FtoK);
  $("#fahrenheit, #celcius, #kelvin").removeClass("selected");
  $("#fahrenheit").addClass("selected");
}

// converts to kelvin from when clicked
function FtoK() {
  var f = 0;
  var k = 0;
  var krnd = 0;
  var f = $("#temp-input").val();
  var k = (((parseFloat(f) - 32) * (5/9)) + 273.15);
  var krnd = Math.round(k * 1000) / 1000;
  $("#temp-input").val(krnd);
  $("button").unbind();
  $("#fahrenheit").one('click', KtoF);
  $("#celcius").one('click', KtoC);
  $("#fahrenheit, #celcius, #kelvin").removeClass("selected");
  $("#kelvin").addClass("selected");
}

// converts to kelvin from when clicked
function CtoK() {
  var c = 0;
  var k = 0;
  var krnd = 0;
  var c = $("#temp-input").val();
  var k = (parseFloat(c) + 273.15);
  var krnd = Math.round(k * 1000) / 1000;
  $("#temp-input").val(krnd);
  $("button").unbind();
  $("#fahrenheit").one('click', KtoF);
  $("#celcius").one('click', KtoC);
  $("#fahrenheit, #celcius, #kelvin").removeClass("selected");
  $("#kelvin").addClass("selected");
}
// To Do
function KtoC() {
  var k = 0;
  var c = 0;
  var crnd = 0;
  var k = $("#temp-input").val();
  var c = (parseFloat(k) - 273.15);
  var crnd = Math.round(c * 1000) / 1000;
  $("#temp-input").val(crnd);
  $("button").unbind();
  $("#fahrenheit").one('click', CtoF);
  $("#kelvin").one('click', CtoK);
  $("#fahrenheit, #celcius, #kelvin").removeClass("selected");
  $("#celcius").addClass("selected");
}

function KtoF() {
  var k = 0;
  var f = 0;
  var frnd = 0;
  var k = $("#temp-input").val();
  var f = ((parseFloat(k) * (9/5) - 459.67));
  var frnd = Math.round(f * 1000) / 1000;
  $("#temp-input").val(frnd);
  $("button").unbind();
  $("#celcius").one('click', FtoC);
  $("#kelvin").one('click', FtoK);
  $("#fahrenheit, #celcius, #kelvin").removeClass("selected");
  $("#fahrenheit").addClass("selected");
}
