var languageChoice = function(language){
    var languageInputChecker = itemType
    var theLanguage = ''

    if (languageInputChecker === "English") {
       theLanguage = languageInputChecker
    } else if (languageInputChecker === "Afrikaans") {
        theLanguage = languageInputChecker
    } else if (languageInputChecker === "Xhosa") {
        theLanguage = languageInputChecker
    }
    return theLanguage;
}

var Greeting = function(name){
    var greeting = '';
    if (theLanguage === "English" && namesGreeted[name] === undefined) {
        greeting = "Hello, " + name;
        // greetTextField.innerHTML = "Hello, " + x;
        counter++
        namesGreeted[x] = 0;
        //console.log(namesGreeted);
        // theNamesObject.push(nameTextField.value);
        // console.log(theNamesObject)
    } else if (theLanguage === "Afrikaans" && namesGreeted[name] === undefined) {
        greeting = "Hallo, " + name;
        // greetTextField.innerHTML = "Hallo, " + x;
        counter++
        namesGreeted[x] = 0;
        // theNamesObject.push(nameTextField.value);
    } else if (theLanguage === "Xhosa" && namesGreeted[name] === undefined) {
        greeting = "Molo, " + name;
        // greetTextField.innerHTML = "Molo, " + x;
        counter++
        namesGreeted[x] = 0;
        // theNamesObject.push(nameTextField.value);
    }
}

//whosBeenGreeted and counterValue work in tandem - the amount of people greeted should equal the count

    var whosBeenGreeted = function(nameList){
    var thoseGreeted = ""
    if (nameList){
      thoseGreeted = nameList;
    }
    return thoseGreeted
}

var counterValue = function(amountOfGreetings){
    var theCount = ''
    if (counter){
        theCounter = counter;
    }
    return theCount
}

var errorMessageProvider = function(name){
    var errorMessage = "";
    var character = "";
    character = name.charAt(0);
    //console.log(x)
    if (name.length == 0) {
        errorMessage = "Please enter a name!";
    } else if (!isNaN(character * 1)) {
        errorMessage = 'Names cannot contain a number!';

    } else if (character == character.toUpperCase()) {
        // document.getElementById("errorText").innerHTML = "";
        greeting();
    } else if (character == character.toLowerCase()) {
        x = '';
        x = nameTextField.value.charAt(0).toUpperCase() + nameTextField.value.slice(1);
        greeting()
    }
}


















JAVASCRIPT EXTRACTION

function greeting() {

    console.log(localStorage)

    document.getElementById("errorText").innerHTML = "";


    var checkedRadioBtn = document.querySelector("input[name='aRadioBut']:checked");
    if (checkedRadioBtn) {
        var itemType = checkedRadioBtn.value
    }

    if (localStorage['greetings']) {
        console.log(Number(localStorage['greetings']))
        counter = Number(localStorage['greetings']);
    }

    //console.log(x)
   CUTTED
    //console.log(namesGreeted)

    //console.log(localStorage['greetings'])
    localStorage['greetings'] = counter;
    counterDisplayer.innerHTML = localStorage['greetings']

}






var character = '';
character = nameTextField.value.charAt(0);
//console.log(x)
if (x.length == 0) {
    errorTextField.innerHTML = "Please enter a name!";
} else if (!isNaN(character * 1)) {
    errorTextField.innerHTML = 'Names cannot contain a number!';

} else if (character == character.toUpperCase()) {
    document.getElementById("errorText").innerHTML = "";
    greeting();
} else if (character == character.toLowerCase()) {
    x = '';
    x = nameTextField.value.charAt(0).toUpperCase() + nameTextField.value.slice(1);
    greeting()
}