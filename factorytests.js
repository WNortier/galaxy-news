describe('language selector' , function(){
    
    it("Should return 'English' if it is the language selected.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("English", factoryVariable.language("English"));
    });

    it("Should return 'Afrikaans' if it is the language selected.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Afrikaans", factoryVariable.language("Afrikaans"));
    });

    it("Should return 'Xhosa' if it is the language selected.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Xhosa", factoryVariable.language("Xhosa"));
    });

})

describe('greeting generator' , function(){
    
    it("Should return a greeting in English in the following fashion: 'Hello,' + 'name'.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Hello, John", factoryVariable.greet("John", "English"));
    });

    it("Should return a greeting in Afrikaans in the following fashion: 'Hallo,' + 'name'.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Hallo, John", factoryVariable.greet("John", "Afrikaans"));
    });

    it("Should return a greeting in Xhosa in the following fashion: 'Molo,' + 'name'.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Molo, John", factoryVariable.greet("John", "Xhosa"));
    });

    // it("Should return an error stating: 'Please select a language!' if no language has been selected", function(){
    //     var factoryVariable = Greeting();
    //     assert.deepEqual("Please select a language!", factoryVariable.greet("John", ""));
    // });

})

describe('input error handler' , function(){
    
    it("Should return 'an error if the name text input field is blank.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Please enter a name!", factoryVariable.error("",));
    });

    it("Should return nothing if a correctly punctuated name is entered.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("", factoryVariable.error("Warwick"));
    });

})

describe('name object generator' , function(){
    
    it("Should add the input provided by the user to an object if it is undefined and initialise it to 0.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual({"warwick": 0}, factoryVariable.add("Warwick"));
    });

    it("Should add the input provided by the user to a object if it is undefined and initialise it to 0 but it should not take numbers.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual({}, factoryVariable.add("1"));
    });

 })