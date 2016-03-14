$(document).ready(function(){

  $('#calculator-form').on('submit', handleSubmit);
  $('.btn-clear').on('click', clearAnswer);
  $('.theMaths').on('click', addOp);


});

//declare variables
//object for the entered values
var enteredValues = {};

//array for the object of enteredValues
var inputArray = [];

//var for final answer
var finalAnswer = 0;

//var for the chosen operand
var operandPicked;


function handleSubmit(event){
  event.preventDefault();

  //create object from entered values
  $.each($('#calculator-form').serializeArray(), function(i, field){
  enteredValues[field.name] = field.value;
  });

  //add operand button to array


  //clear the form
  //move to clearAnswer
  // $('#calculator-form').find('input[type=text]').val('');
  // $('[name=operand]').removeAttr('checked');

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

//add operand button to array
function addOp(){
  operandPicked = $(this).data('id');
  enteredValues.operand = operandPicked;
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
  enteredValues = {}
  $('#calculator-form').find('input[type=text]').val('');
  $('[name=operand]').removeAttr('checked');
  $('.inputNumbers').text("");
  $('.answer').text("");
}
