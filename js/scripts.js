var inputNum = 0;
var displayArray = [];
var specials = [1,2,3];
var daveString = "I'm sorry, Dave. I'm afraid I can't do that."


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

        }else{
            numArray[i] = i;
        }
    }
    return numArray;
}

$(function(){
    $("form").submit(function(event){
      event.preventDefault();
      
      inputNum = parseInt($("input#inputNumber").val());
      displayArray = createNumArray(inputNum);
      alert(displayArray);
  
    // var test = containsDigit(inputNum, 1);
    // alert("test if input of " + inputNum + " contains the number 1, result is " + test );

     
    
      
    //   // alert(string);
    //    $("#outputA").text(string);
    //    $("#outputB").text(newString);
   
    //   $("#output").show();
   
   
    });
   
   });