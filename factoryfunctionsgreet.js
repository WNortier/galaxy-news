function Greeting(nameList) {
    // var namesGreeted = onlyKeys || {};
    var theLanguage = '';
    var namesGreeted = nameList || {};
    var errorMessage = "";
    var greeting = '';
    //var amountOfGreetingsMade;
    // var amountOfGreetings = 0; 

    function languageChoice(language) {
        var languageInputChecker = language;


        if (languageInputChecker === "English" || "Afrikaans" || "Xhosa") {
            theLanguage = languageInputChecker;
            //console.log(theLanguage);
        }
        return theLanguage;
    }

    function greetName(name) {
       
        let character = '';
        character = name.charAt(0).toUpperCase() + (name.slice(1)).toLowerCase();
        numberCheck = name.charAt(0);
        if (!isNaN(numberCheck * 1)) {
            // errorMessage = 'Names cannot contain a number!';
            greeting = "Names cannot contain a number!";
        }
        else if (theLanguage === "English") {
            greeting = "Hello, " + character;
        } else if (theLanguage === "Afrikaans") {
            greeting = "Hallo, " + character;
        } else if (theLanguage === "Xhosa") {
            greeting = "Molo, " + character;
        }
        return greeting
    }

    // language: languageChoice,
    //     add: addToGreetedObject,
    //     names: whosBeenGreeted,
    //     count: counterValue,
    //     greet: greetName,
    //     error: errorMessageProvider,
    //     clear: clearNames,



    function addToGreetedObject(name) {
        //var aNameEntry = namesGreeted[i]
        numberCheck = name.charAt(0);
        if (!isNaN(numberCheck * 1)) {
            // errorMessage = 'Names cannot contain a number!';
            greeting = "Names cannot contain a number!";
            errorMessageProvider(name)
        }

      else if (namesGreeted[name] === undefined){
            //console.log("im working")

              namesGreeted[name.toLowerCase()] = 0;
              
        }

    }

   


    // if (namesGreeted[name] == "" || theLanguage == "") {
    //     errorMessageProvider(name);}


    // function addToGreetedObject(name) {
    //     //var aNameEntry = namesGreeted[i]
    //     if (namesGreeted[name] === undefined) {
    //         //console.log("im working")
    //         namesGreeted[name] = 0;

    //     }

    // }


    function whosBeenGreeted() {
        return namesGreeted
    }


    function counterValue(name) {
        //var lowerCaseEntries = [];
        result = Object.keys(namesGreeted);
        // const result = Object.keys(nameWithTimesGreetedMixedCase)
        return result.length
    }
     

    function errorMessageProvider(name) {
        // var errorMessage = "";
        let character = "";
        character = name.charAt(0);
        if (name.length == 0) {
            errorMessage = "Please enter a name!";
        }
        // else if (!isNaN(character * 1)) {
        //     errorMessage = 'Names cannot contain a number!';
        // }
        else if (theLanguage == '') {
            errorMessage = "Please select a language!"
        }
        return errorMessage
    }

    function clearNames(){
        namesGreeted = {};
    }
    return {
        language: languageChoice,
        add: addToGreetedObject,
        names: whosBeenGreeted,
        count: counterValue,
        greet: greetName,
        error: errorMessageProvider,
        clear: clearNames,
        //blocker: noInputBlocker
    }


}

