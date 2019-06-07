describe('language selector' , function(){
    
    it("Should return 'English || Afrikaans || Xhosa based on the language selected on the radiobutton.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("English", factoryVariable.language("English"));
    });

    it("Should return 'English || Afrikaans || Xhosa based on the language selected on the radiobutton.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Afrikaans", factoryVariable.language("Afrikaans"));
    });

    it("Should return 'English || Afrikaans || Xhosa based on the language selected on the radiobutton.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Xhosa", factoryVariable.language("Xhosa"));
    });

})

describe('greeting generator' , function(){
    
    it("Should return a greeting statement in the following fashion: 'Hello,' + 'name'.", function(){
        var factoryVariable = Greeting();
        assert.deepEqual("Hello, John", factoryVariable.greet("John", "English"));
    });

})

describe('greet function' , function(){
    
    it("Should return 'Hello John'.", function(){
        var factoryVariable = Greeting();
        factoryVariable.names("English");
        assert.deepEqual("Hello, John", factoryVariable.greet("John"));
    });

})

// describe('greet function' , function(){
    
//     it("Should return 'Hello John'.", function(){
//         var factoryVariable = Greeting();
//         factoryVariable.count("English");
//         assert.deepEqual("Hello, John", factoryVariable.greet("John"));
//     });

// })

describe('greet function' , function(){
    
    it("Should return 'Hello John'.", function(){
        var factoryVariable = Greeting();
        factoryVariable.error("English");
        assert.deepEqual("Hello, John", factoryVariable.error("John"));
    });

})


describe('greet function' , function(){
    
    it("Should return 'Hello John'.", function(){
        var factoryVariable = Greeting();
        factoryVariable.clear("English");
        assert.deepEqual("Hello, John", factoryVariable.greet("John"));
    });

})


    // language: languageChoice,
    //     add: addToGreetedObject,
    //     names: whosBeenGreeted,
    //     count: counterValue,
    //     greet: greetName,
    //     error: errorMessageProvider,
    //     clear: clearNames,
