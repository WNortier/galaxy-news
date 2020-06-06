//@ts-nocheck
'use strict';

function Greeting(nameList) {
  var namesGreeted = nameList || {};
  console.log(namesGreeted);
  var errorMessage = '';
  var greeting = '';
  const regex = /\d/;

  function greetName(name, language) {
    let formatted = '';
    formatted = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (name.length != 0 && language == '') {
      errorMessage = 'Please select a language!';
    }
    if (language == 'English') {
      greeting = 'Hello, ' + formatted;
    } else if (language == 'Afrikaans') {
      greeting = 'Hallo, ' + formatted;
    } else if (language == 'Xhosa') {
      greeting = 'Molo, ' + formatted;
    }
    return greeting;
  }

  function addToGreetedObject(name) {
    var numberTest = regex.test(name);
    if (numberTest === true) {
      errorMessage = 'Names cannot contain a number!';
    } else if (namesGreeted[name] === undefined) {
      namesGreeted[name.toLowerCase()] = 0;
      console.log(namesGreeted);
    }
    return namesGreeted;
  }

  function whosBeenGreeted() {
    return namesGreeted;
  }

  function counterValue() {
    result = Object.keys(namesGreeted);
    return result.length;
  }

  function errorMessageProvider(name, language) {
    if (name.length == 0) {
      errorMessage = 'Please enter a name!';
    } else {
    }
    return errorMessage;
  }

  function clearNames() {
    namesGreeted = {};
  }

  return {
    add: addToGreetedObject,
    whosBeenGreeted,
    count: counterValue,
    greet: greetName,
    error: errorMessageProvider,
    clear: clearNames,
  };
}
