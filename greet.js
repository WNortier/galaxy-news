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

if(localStorage['namesPassed']){
    var nameList = JSON.parse(localStorage.getItem("namesPassed"));
    console.log(nameList)
    }else{
        var nameList;
    }
    var factoryVariable = Greeting(nameList); 
localStorage.setItem('namesPassed', JSON.stringify(factoryVariable.names()));
    
var greetData = JSON.parse(localStorage.getItem("namesPassed"));
// var onlyKeys = Object.keys(greetData);
window.onload = function(){
    counterDisplayer.innerHTML = factoryVariable.count();
}

function clearIt() {
    Object.keys(namesGreeted).forEach(k => delete namesGreeted[k])
}

function fullReset() {
    counterDisplayer.innerHTML = 0;
    localStorage.clear();
    document.getElementById("greetingGenerator").disabled = false;
    factoryVariable.clear();
    document.getElementById("nameText").value = "";
    document.getElementById("greetText").innerHTML = "";
    document.getElementById("errorText").innerHTML = "";
}


function inputChecker() {

    
    // document.getElementById("greetText").innerHTML = "";
    // document.getElementById("errorText").innerHTML = "";

    var checkedRadioBtn = document.querySelector("input[name='aRadioBut']:checked");
    if (checkedRadioBtn) {
        var language = checkedRadioBtn.value
    }
    else {
        var language = "";
    }
      
    factoryVariable.add(nameTextField.value)
    
    factoryVariable.language(language)
    
    greetTextField.innerHTML = factoryVariable.greet(nameTextField.value.trim());
   
    errorTextField.innerHTML = factoryVariable.error(nameTextField.value.trim()); 

    counterDisplayer.innerHTML = factoryVariable.count();
    
    localStorage.setItem('namesPassed', JSON.stringify(factoryVariable.names()));
    
    if (language.length != 0  && nameTextField.value.length == 0){
        document.getElementById("greetText").innerHTML = "";
    }
    if (language.length != 0  && nameTextField.value.length != 0){
        document.getElementById("errorText").innerHTML = "";
    }
    // counterDisplayer.innerHTML = localStorage['greetings']
}

greetMeButton.addEventListener('click', inputChecker);
resetButton.addEventListener('click', fullReset);