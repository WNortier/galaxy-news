



function Greeting(nameList) {
    // var namesGreeted = onlyKeys || {};
    var theLanguage = '';
    var namesGreeted = nameList || {};
    console.log(namesGreeted)
    var errorMessage = "";
    var greeting = '';
    const regex = /\d/;
    //const regex = /[^a-z]/gi;
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

//  function lettersOnly(name){
//     var replacer = /[^a-z]/gi;
//     name.value = name.value.replace(replacer, "");
// return name    
// }

    function greetName(name, language) {
        //var numberTest = regex.test(name);
        // let character = '';
        character = name.charAt(0).toUpperCase() + (name.slice(1)).toLowerCase();
        // console.log(language)
               // numberCheck = name.charAt(0);
        

        
        // if (!isNaN(numberCheck * 1)  && theLanguage.length != 0) {
        //     // errorMessage = 'Names cannot contain a number!';
        //     greeting = "Names cannot contain a number!";
        // }
        

        if (language == '') {
            errorMessage = "Please select a language!"
        }
    
        // if (numberTest ===true) {
        //     errorMessage = "Names cannot contain a number!";
        // }
        
        else if (language == "English") {
            greeting = "Hello, " + character;
        } else if (language == "Afrikaans") {
            greeting = "Hallo, " + character;
        } else if (language == "Xhosa") {
            greeting = "Molo, " + character;
        }
        return greeting
    }
    // var numberTest = regex.test(name);
    // if (name) {
    //     if (numberTest ===true) {
    //         greeting = "Names cannot contain a number!";
    //     }


    function addToGreetedObject(name) {
        //var aNameEntry = namesGreeted[i]
       
        var numberTest = regex.test(name);
    
        if (numberTest ===true) {
            errorMessage = "Names cannot contain a number!";
            //errorMessageProvider(name)

        // numberCheck = name.charAt(0);
        // if (!isNaN(numberCheck * 1)) {
            // errorMessage = 'Names cannot contain a number!';
                      
        }

      else if (namesGreeted[name] === undefined){
            //console.log("im working")
            
              namesGreeted[name.toLowerCase()] = 0;
              
              
              console.log(namesGreeted)
        }

        return namesGreeted

    }

    function whosBeenGreeted() {
        return namesGreeted
        
    }


    function counterValue() {
        //var lowerCaseEntries = [];
        result = Object.keys(namesGreeted);
        
        // const result = Object.keys(nameWithTimesGreetedMixedCase)
        return result.length
    }
     

    function errorMessageProvider(name) {
        // var errorMessage = "";
        //let character = "";
        // var character = name.charAt(0);
        if (name.length == 0) {
            errorMessage = "Please enter a name!";
        }
        else {

        }
        // else if (!isNaN(character * 1)) {
        //     errorMessage = 'Names cannot contain a number!';
        // }
        
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
        // letters: lettersOnly
        //blocker: noInputBlocker
    }


}

// function lettersOnly(name){
//     var regex = /[^a-z]/gi;
//     name.value = name.value.replace(regex, "");
//     }

//gi stands for g stands for global and i is for non case sensitive
   


    // if (namesGreeted[name] == "" || theLanguage == "") {
    //     errorMessageProvider(name);}


    // function addToGreetedObject(name) {
    //     //var aNameEntry = namesGreeted[i]
    //     if (namesGreeted[name] === undefined) {
    //         //console.log("im working")
    //         namesGreeted[name] = 0;

    //     }

    // }

