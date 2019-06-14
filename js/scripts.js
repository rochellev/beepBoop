var inputNum = 0;
var displayArray = [];
var specials = [1,2,3];


// return true if digit is in number, false otherwise
var containsDigit = function(number, digit){
    debugger;
    while(number != 0){
        var currentDigit = number % 10;
        if (currentDigit === digit) {
            return true;
        }else{
            // to get an integer not floating point
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
        if(!specials.includes(i)){
            numArray[i]= i;
        }else if(i){
            

        }
    }
    return numArray;
}

$(function(){
    $("form").submit(function(event){
      event.preventDefault();
      
      //get user input
      inputNum = parseInt($("input#inputNumber").val());
    //   displayArray = createNumArray(inputNum);
    //   alert(displayArray);
  
    var test = containsDigit(inputNum, 1);
    alert("test if input of " + inputNum + " contains the number 1, result is " + test );

     
    
      
    //   // alert(string);
    //    $("#outputA").text(string);
    //    $("#outputB").text(newString);
   
    //   $("#output").show();
   
   
    });
   
   });