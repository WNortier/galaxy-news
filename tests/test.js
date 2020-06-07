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
