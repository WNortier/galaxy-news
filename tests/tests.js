//@ts-nocheck

describe('language selector', function () {
  it("Should return 'English' if it is the language selected.", function () {
    var greetService = Greeting();
    assert.deepEqual('English', greetService.language('English'));
  });

  it("Should return 'Afrikaans' if it is the language selected.", function () {
    var greetService = Greeting();
    assert.deepEqual('Afrikaans', greetService.language('Afrikaans'));
  });

  it("Should return 'Xhosa' if it is the language selected.", function () {
    var greetService = Greeting();
    assert.deepEqual('Xhosa', greetService.language('Xhosa'));
  });
});

describe('greeting generator', function () {
  it("Should return a greeting in English in the following fashion: 'Hello,' + 'name'.", function () {
    var greetService = Greeting();
    assert.deepEqual('Hello, John', greetService.greet('John', 'English'));
  });

  it("Should return a greeting in Afrikaans in the following fashion: 'Hallo,' + 'name'.", function () {
    var greetService = Greeting();
    assert.deepEqual('Hallo, John', greetService.greet('John', 'Afrikaans'));
  });

  it("Should return a greeting in Xhosa in the following fashion: 'Molo,' + 'name'.", function () {
    var greetService = Greeting();
    assert.deepEqual('Molo, John', greetService.greet('John', 'Xhosa'));
  });
});

describe('input error handler', function () {
  it("Should return 'an error if the name text input field is blank.", function () {
    var greetService = Greeting();
    assert.deepEqual('Please enter a name!', greetService.error(''));
  });

  it('Should return nothing if a correctly punctuated name is entered.', function () {
    var greetService = Greeting();
    assert.deepEqual('', greetService.error('Warwick'));
  });
});

describe('name object generator', function () {
  it('Should add the input provided by the user to an object if it is undefined and initialise it to 0.', function () {
    var greetService = Greeting();
    assert.deepEqual({ warwick: 0 }, greetService.add('Warwick'));
  });

  it('Should add the input provided by the user to a object if it is undefined and initialise it to 0 but it should not take numbers.', function () {
    var greetService = Greeting();
    assert.deepEqual({}, greetService.add('1'));
  });
});
