var inputNum = 0;
var mode = "";
var displayArray = [];
var daveString = " I'm sorry, Dave. I'm afraid I can't do that.";
var beepString = " Beep!";
var boopString = " Boop!";


// return true if number contains digit, false otherwise
var containsDigit = function(number, digit){
    while(number != 0){
        var currentDigit = number % 10;
        if (currentDigit === digit) {
            return true;
        }else{
            // round down to get an integer
            number = Math.floor(number/10);
        }
    }
    return false;

}

// given the end number, return array to display
var createNumArray = function(endNum){
    var numArray= [];
    for(i= 0; i < endNum + 1; i++ ){
        // check if need to apply rules
       if(containsDigit(i, 3)){
           // apply rule
           numArray[i] = daveString; 

        }else if(containsDigit(i, 2)){
            numArray[i] = boopString;
        }else if(containsDigit(i, 1)){
            numArray[i] = beepString;
        }else{
            numArray[i] = " " + i;
        }
    }
    return numArray;
}

$(function(){
    $("form").submit(function(event){
      event.preventDefault();
      
      inputNum = parseInt($("input#inputNumber").val());
      mode = $("input:radio[name=modes]:checked").val();
      console.log("the mode is: " + mode);
      displayArray = createNumArray(inputNum);
  
    // var test = containsDigit(inputNum, 1);
    // alert("test if input of " + inputNum + " contains the number 1, result is " + test );

       $("#outputA").text(inputNum);
       $("#outputB").text(displayArray);
   
      $("#output").show();
   
   
    });
   
   });