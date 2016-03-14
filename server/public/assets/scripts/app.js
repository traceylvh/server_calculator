$(document).ready(function(){

  $('#calculator-form').on('submit', handleSubmit);
  $('.btn-clear').on('click', clearAnswer);


});

//declare variables
//object for the entered values
var enteredValues = {};

//array for the object of enteredValues
var inputArray = [];

//var for final answer
var finalAnswer = 0;


function handleSubmit(event){
  event.preventDefault();

  //create object from entered values
  $.each($('#calculator-form').serializeArray(), function(i, field){
  enteredValues[field.name] = field.value;
  });

  //clear the form
  $('#calculator-form').find('input[type=text]').val('');
  $('[name=operand]').removeAttr('checked');

  // inputArray.push(enteredValues);
  // console.log(inputArray);
  // console.log(enteredValues);

    sendData();


}



//let's experiment with POST
function sendData(){
  //didn't work to pass enteredValues straight in, but putting it in testObject did ???
  // var testObject = enteredValues;
  //fixed

  $.ajax({
    type: "POST",
    url: "/inputs",
    data: enteredValues,
    success: function(answer){
      // console.log(answer.response);
      finalAnswer = answer.response;
      // console.log(finalAnswer);
      appendAnswer();
    }
  });
}


//function to append entered numbers, operand, and answer to the DOM
function appendAnswer(){
  var symbol = "";
  switch (enteredValues.operand){
    case "add":
    symbol = "+"
    break;

    case "subtract":
    symbol = "-"
    break;

    case "multiply":
    symbol = "*"
    break;

    case "divide":
    symbol = "/"
    break;
  };

  $('.inputNumbers').text(enteredValues.firstnumber + " " + symbol + " " + enteredValues.secondnumber);

  $('.answer').text(" = " + finalAnswer);

}

//function to clear the answer when the clear button is clicked
function clearAnswer(){
  $('.inputNumbers').text("");
  $('.answer').text("");
}
