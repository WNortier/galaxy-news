//@ts-check
'use strict';

{
  //INNERHTML
  var greetTextField = document.querySelector('.greetText');
  var errorTextField = document.querySelector('.errorText');
  var counterDisplayer = document.querySelector('.entryCounter');
  //INPUT_FIELDS
  var nameTextField = document.querySelector('.nameText');
  //BUTTONS
  var radioSelectorButtonsGlobal = document.querySelectorAll('.radioSelectors');
  var radioSelectorButtons = document.querySelector('.radioSelectors1');
  var radioSelectorButtons = document.querySelector('.radioSelectors2');
  var radioSelectorButtons = document.querySelector('.radioSelectors3');
  var greetMeButton = document.querySelector('.greetingGenerator');
  var resetButton = document.querySelector('.resetMe');
}

//retrieving names from previous session (localStorage)
if (localStorage['previouslyGreeted']) {
  var nameList = JSON.parse(localStorage.getItem('previouslyGreeted'));
  console.log(nameList);
} else {
  var nameList;
}

var GreetingsFactory = Greeting(nameList);

localStorage.setItem(
  'previouslyGreeted',
  JSON.stringify(GreetingsFactory.whosBeenGreeted())
);

window.onload = function () {
  counterDisplayer.innerHTML = GreetingsFactory.count();
};

document.getElementById('nameText').addEventListener('keydown', function (e) {
  const regexer = RegExp('[a-zA-Z]');

  if (!regexer.test(e.key) && e.key != 'backspace') {
    e.preventDefault();
    document.getElementById('errorText').innerHTML =
      'Symbols and numbers are not allowed!';
  }
});

function clearIt() {
  Object.keys(namesGreeted).forEach(
    (nameEntry) => delete namesGreeted[nameEntry]
  );
}

function fullReset() {
  counterDisplayer.innerHTML = 0;
  localStorage.clear();
  document.getElementById('greetingGenerator').disabled = false;
  GreetingsFactory.clear();
  document.getElementById('nameText').value = '';
  document.getElementById('greetText').innerHTML = '';
  document.getElementById('errorText').innerHTML = '';
}

function inputChecker() {
  var lengthOfName = nameTextField.value.length;

  var checkedRadioBtn = document.querySelector(
    "input[name='aRadioBut']:checked"
  );
  if (checkedRadioBtn) {
    var language = checkedRadioBtn.value;
  } else {
    var language = '';
  }

  if (lengthOfName == 0 || language == '') {
    counterDisplayer.innerHTML = 0;
  } else {
    document.getElementById('errorText').innerHTML = GreetingsFactory.add(
      nameTextField.value
    );
  }

  greetTextField.innerHTML = GreetingsFactory.greet(
    nameTextField.value.trim(),
    language
  );

  errorTextField.innerHTML = GreetingsFactory.error(nameTextField.value.trim());

  counterDisplayer.innerHTML = GreetingsFactory.count();

  localStorage.setItem(
    'previouslyGreeted',
    JSON.stringify(GreetingsFactory.names())
  );

  if (language.length != 0 && lengthOfName == 0) {
    document.getElementById('greetText').innerHTML = '';
  }
  if (language.length != 0 && lengthOfName != 0) {
    document.getElementById('errorText').innerHTML = '';
  }
}

greetMeButton.addEventListener('click', inputChecker);
resetButton.addEventListener('click', fullReset);
