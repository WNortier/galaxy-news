function Greeting(nameList) {

    var theLanguage = '';
    var namesGreeted = nameList || {};
    console.log(namesGreeted)
    var errorMessage = "";
    var greeting = '';
    const regex = /\d/;

    // function languageChoice(language) {
    //     if (language === "English" || "Afrikaans" || "Xhosa") {
    //         theLanguage = language;
    //     }
    //     return theLanguage;
    // }


    function greetName(name, language) {

        let character = '';
        character = name.charAt(0).toUpperCase() + (name.slice(1)).toLowerCase();
        if (name.length != 0 && language == '') {
            errorMessage = "Please select a language!"
        }
        if (language == "English") {
            greeting = "Hello, " + character;
        } else if (language == "Afrikaans") {
            greeting = "Hallo, " + character;
        } else if (language == "Xhosa") {
            greeting = "Molo, " + character;
        }
        return greeting
    }

    function addToGreetedObject(name) {
        var numberTest = regex.test(name);
        if (numberTest === true) {
            errorMessage = "Names cannot contain a number!";
        } else if (namesGreeted[name] === undefined) {
            namesGreeted[name.toLowerCase()] = 0;
            console.log(namesGreeted)
        }
        return namesGreeted
    }

    function whosBeenGreeted() {
        return namesGreeted
    }


    function counterValue() {
        result = Object.keys(namesGreeted);
        return result.length
    }


    function errorMessageProvider(name, language) {
        if (name.length == 0) {
            errorMessage = "Please enter a name!";
        } else {

        }
        return errorMessage
    }

    function clearNames() {
        namesGreeted = {};
    }

    return {
        //languageChoice,
        add: addToGreetedObject,
        names: whosBeenGreeted,
        count: counterValue,
        greet: greetName,
        error: errorMessageProvider,
        clear: clearNames,
    }
}