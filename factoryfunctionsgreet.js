function Greeting(nameList) {
    // var namesGreeted = onlyKeys || {};
    var theLanguage = '';
    var namesGreeted = nameList || {};
    var errorMessage = "";
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
        var greeting = '';
        let character = '';
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

       
      if (namesGreeted[name] === undefined){
            //console.log("im working")

              namesGreeted[name] = 0;
              
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


    function counterValue() {
        var lowerCaseEntries = [];
        var theCount = Object.keys(namesGreeted);
        for (var i in theCount) {
            var element = theCount[i];
            lowerCaseEntries = element.toLowerCase();
                    }
        //console.log(typeof theCount)
        return lowerCaseEntries.length;
        
    }

    function errorMessageProvider(name) {
        // var errorMessage = "";
        let character = "";
        character = name.charAt(0);
        if (name.length == 0) {
            errorMessage = "Please enter a name!";
        }
        else if (!isNaN(character * 1)) {
            errorMessage = 'Names cannot contain a number!';
        }
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

