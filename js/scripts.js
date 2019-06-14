var inputNum = 0;
var displayArray = [];

// given the end number, return array to display
var createNumArray = function(endNum){
    var numArray= [];
    for(i= 0; i < endNum + 1; i++ ){
        numArray[i] = i;
    }
    return numArray;
}

$(function(){
    $("form").submit(function(event){
      event.preventDefault();
      
      //get user input
      inputNum = parseInt($("input#inputNumber").val());
      displayArray = createNumArray(inputNum);
      alert(displayArray);


     
    
      
    //   // alert(string);
    //    $("#outputA").text(string);
    //    $("#outputB").text(newString);
   
    //   $("#output").show();
   
   
    });
   
   });