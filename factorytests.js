describe('greet function' , function(){
    
    it("Should return 'Hello John'.", function(){
        var factoryVariable = Greeting();
        factoryVariable.language("English");
        assert.deepEqual("Hello, John", factoryVariable.greet("John"));
    });

})