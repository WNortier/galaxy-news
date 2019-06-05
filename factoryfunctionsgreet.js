function Greeting() {
    // var namesGreeted = onlyKeys || {};
    var theLanguage = '';
    var language; 
    var namesGreeted = nameList || {};
    
    function languageChoice(language) {
        var languageInputChecker = language;


        if (languageInputChecker === "English") {
            theLanguage = languageInputChecker;
        } else if (languageInputChecker === "Afrikaans") {
            theLanguage = languageInputChecker;
        } else if (languageInputChecker === "Xhosa") {
            theLanguage = languageInputChecker;
        }
        return theLanguage;

    }

    function greetName(name) {
        var greeting = '';
        character = '';
        character = name.charAt(0).toUpperCase() + (name.slice(1)).toLowerCase();
        if (theLanguage === "English") {
            greeting = "Hello, " + character;
        } else if (theLanguage === "Afrikaans") {
            greeting = "Hallo, " + character;
        } else if (theLanguage === "Xhosa") {
            greeting = "Molo, " + character;
        }
        return greeting
    }


    // //whosBeenGreeted and counterValue work in tandem - the amount of people greeted should equal the count
    function addToGreetedObject(name) {
                   //var aNameEntry = namesGreeted[i]
            if (namesGreeted[name] === undefined) {
                amountOfGreetings++
                namesGreeted[name] = 0;
            }
            // for (var i in onlyKeys) {
            //     var aKey = onlyKeys[i].toLowerCase();
                //     if (aKey == x.toLowerCase()) {
                //     };
                console.log(namesGreeted)
                    }
                    
    

    function whosBeenGreeted(nameList) {
        var thoseGreeted = ""
        if (nameList) {
            thoseGreeted = nameList;
            console.log(thoseGreeted)
        }
        return thoseGreeted
    }


    function counterValue(amountOfGreetings) {
           var theCount = amountOfGreetings;
            console.log(theCount)
            return theCount
        }
    
    function errorMessageProvider(name) {
        var errorMessage = "";
        var character = "";
        character = name.charAt(0);
        //console.log(x)
        console.log(theLanguage)
        if (name.length == 0) {
            errorMessage = "Please enter a name!";
        } else if (!isNaN(character * 1)) {
            errorMessage = 'Names cannot contain a number!';
        }
        else if (theLanguage == ''){
            errorMessage = "Please select a language!"
        }
        //console.log(theLanguage)

        // } else if (character == character.toUpperCase()) {
        //     // document.getElementById("errorText").innerHTML = "";
        //     greeting();
        // } else if (character == character.toLowerCase()) {
        //     x = '';
        //     x = nameTextField.value.charAt(0).toUpperCase() + nameTextField.value.slice(1);
        //     greeting()
        // }
    

    return errorMessage
}


    return {
        language: languageChoice,
        add: addToGreetedObject,
        names: whosBeenGreeted,
        count: counterValue,
        greet: greetName,
        error: errorMessageProvider,
    }

    
}
    