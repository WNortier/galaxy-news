var radioSelectorButtonsGlobal = document.querySelectorAll(".radioSelectors");
var radioSelectorButtons = document.querySelector(".radioSelectors1");
var radioSelectorButtons = document.querySelector(".radioSelectors2");
var radioSelectorButtons = document.querySelector(".radioSelectors3");
var nameTextField = document.querySelector(".nameText");
var greetMeButton = document.querySelector(".greetingGenerator");
var resetButton = document.querySelector(".resetMe");
var greetTextField = document.querySelector(".greetText");
var errorTextField = document.querySelector(".errorText");
var counterDisplayer = document.querySelector(".entryCounter");
var amountOfGreetings = 0;
var factoryVariable = Greeting(); 
var namesGreeted = nameList || {};

if(localStorage['namesPassed']){
    var nameList =  JSON.parse(localStorage.getItem("namesPassed"));
    }else{
        var nameList;
    }

    window.onload = function(){
        counterDisplayer.innerHTML = factoryVariable.count(amountOfGreetings);
        console.log(factoryVariable.count(amountOfGreetings));
    }

//var GreetInstance = require('./factoryfunctionsgreet.js');
// if ((document.querySelector("#englishOption").checked == false && document.querySelector("#afrikaansOption").checked == false && document.querySelector("#xhosaOption").checked == false)){
//     document.getElementById("errorText").innerHTML = "Please select a language!";
// }




function clearIt() {
    Object.keys(namesGreeted).forEach(k => delete namesGreeted[k])
}



function fullReset() {
    amountOfGreetings = 0;
    localStorage.clear();
    localStorage['greetings'] = 0;
    console.log(localStorage['greetings'])
    localStorage.setItem('namesPassed', JSON.stringify(namesGreeted));
    counterDisplayer.innerHTML = localStorage['greetings']
    document.getElementById("greetingGenerator").disabled = false;
    clearIt();
    document.getElementById("nameText").value = "";
    document.getElementById("greetText").innerHTML = "";
    document.getElementById("errorText").innerHTML = "";
    console.log(localStorage)

}


function inputChecker() {
    document.getElementById("greetText").innerHTML = "";
    document.getElementById("errorText").innerHTML = "";

    var checkedRadioBtn = document.querySelector("input[name='aRadioBut']:checked");
    if (checkedRadioBtn) {
        var language = checkedRadioBtn.value
    }
    else {
        var language = "";
    }
      

    // if (nameTextField.value.length > 0 && (document.querySelector("#englishOption").checked == false && document.querySelector("#afrikaansOption").checked == false && document.querySelector("#xhosaOption").checked == false) {
    //     errorTextField.innerHTML = "Please select a language!";
    // }
    
    factoryVariable.add(nameTextField.value)
    factoryVariable.language(language)
    console.log(factoryVariable.language(language))
    //factoryVariable.greet(nameTextField.value)
    console.log(factoryVariable.greet(nameTextField.value))
   
    // factoryVariable.add(nameTextField.value.trim());
    greetTextField.innerHTML = factoryVariable.greet(nameTextField.value.trim());
    counterDisplayer.innerHTML = factoryVariable.count(amountOfGreetings);
    console.log(factoryVariable.count(amountOfGreetings))

    errorTextField.innerHTML = factoryVariable.error(nameTextField.value.trim());
    
    localStorage['greetings'] = amountOfGreetings;
    counterDisplayer.innerHTML = localStorage['greetings']
    
    localStorage.setItem('namesPassed', JSON.stringify(factoryVariable.names()));
    greetData = JSON.parse(localStorage.getItem("namesPassed"));
    var onlyKeys = Object.keys(greetData);
 
    //   else if (englishChosen == false && afrikaansChosen == false && xhosaChosen == false) {
  

}




greetMeButton.addEventListener('click', inputChecker);
resetButton.addEventListener('click', fullReset);